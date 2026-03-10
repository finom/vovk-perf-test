import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqc")
export default class JqcController {
  @operation({
    summary: "Get Jqc",
  })
  @get()
  static getJqc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jqc",
  })
  @post("{id}")
  static createJqc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
