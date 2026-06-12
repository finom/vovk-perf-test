import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbe")
export default class CbeController {
  @operation({
    summary: "Get Cbe",
  })
  @get()
  static getCbe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cbe",
  })
  @post("{id}")
  static createCbe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
