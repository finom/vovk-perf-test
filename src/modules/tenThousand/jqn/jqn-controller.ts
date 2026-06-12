import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqn")
export default class JqnController {
  @operation({
    summary: "Get Jqn",
  })
  @get()
  static getJqn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jqn",
  })
  @post("{id}")
  static createJqn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
