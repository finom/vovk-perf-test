import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("enm")
export default class EnmController {
  @operation({
    summary: "Get Enm",
  })
  @get()
  static getEnm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Enm",
  })
  @post("{id}")
  static createEnm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
