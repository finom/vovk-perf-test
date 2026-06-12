import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqy")
export default class JqyController {
  @operation({
    summary: "Get Jqy",
  })
  @get()
  static getJqy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jqy",
  })
  @post("{id}")
  static createJqy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
