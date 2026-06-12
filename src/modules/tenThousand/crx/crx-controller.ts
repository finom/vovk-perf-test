import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("crx")
export default class CrxController {
  @operation({
    summary: "Get Crx",
  })
  @get()
  static getCrx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Crx",
  })
  @post("{id}")
  static createCrx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
