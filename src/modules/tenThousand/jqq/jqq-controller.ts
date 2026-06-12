import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqq")
export default class JqqController {
  @operation({
    summary: "Get Jqq",
  })
  @get()
  static getJqq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jqq",
  })
  @post("{id}")
  static createJqq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
