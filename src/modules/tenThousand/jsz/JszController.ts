import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsz")
export default class JszController {
  @operation({
    summary: "Get Jsz",
  })
  @get()
  static getJsz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jsz",
  })
  @post("{id}")
  static createJsz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
