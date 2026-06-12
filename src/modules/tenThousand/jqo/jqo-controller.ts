import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqo")
export default class JqoController {
  @operation({
    summary: "Get Jqo",
  })
  @get()
  static getJqo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jqo",
  })
  @post("{id}")
  static createJqo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
