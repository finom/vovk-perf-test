import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("crw")
export default class CrwController {
  @operation({
    summary: "Get Crw",
  })
  @get()
  static getCrw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Crw",
  })
  @post("{id}")
  static createCrw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
