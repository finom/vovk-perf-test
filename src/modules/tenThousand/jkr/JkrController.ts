import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jkr")
export default class JkrController {
  @operation({
    summary: "Get Jkr",
  })
  @get()
  static getJkr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jkr",
  })
  @post("{id}")
  static createJkr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
