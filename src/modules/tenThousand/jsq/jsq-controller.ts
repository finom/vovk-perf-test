import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsq")
export default class JsqController {
  @operation({
    summary: "Get Jsq",
  })
  @get()
  static getJsq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jsq",
  })
  @post("{id}")
  static createJsq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
