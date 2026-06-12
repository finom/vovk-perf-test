import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jku")
export default class JkuController {
  @operation({
    summary: "Get Jku",
  })
  @get()
  static getJku = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jku",
  })
  @post("{id}")
  static createJku = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
