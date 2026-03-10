import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hlr")
export default class HlrController {
  @operation({
    summary: "Get Hlr",
  })
  @get()
  static getHlr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hlr",
  })
  @post("{id}")
  static createHlr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
