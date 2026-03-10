import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqg")
export default class JqgController {
  @operation({
    summary: "Get Jqg",
  })
  @get()
  static getJqg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jqg",
  })
  @post("{id}")
  static createJqg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
