import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jop")
export default class JopController {
  @operation({
    summary: "Get Jop",
  })
  @get()
  static getJop = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jop",
  })
  @post("{id}")
  static createJop = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
