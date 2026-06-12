import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsj")
export default class JsjController {
  @operation({
    summary: "Get Jsj",
  })
  @get()
  static getJsj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jsj",
  })
  @post("{id}")
  static createJsj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
