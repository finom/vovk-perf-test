import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jm")
export default class JmController {
  @operation({
    summary: "Get Jm",
  })
  @get()
  static getJm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jm",
  })
  @post("{id}")
  static createJm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
