import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsm")
export default class JsmController {
  @operation({
    summary: "Get Jsm",
  })
  @get()
  static getJsm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jsm",
  })
  @post("{id}")
  static createJsm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
