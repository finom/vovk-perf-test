import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjm")
export default class JjmController {
  @operation({
    summary: "Get Jjm",
  })
  @get()
  static getJjm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jjm",
  })
  @post("{id}")
  static createJjm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
