import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjp")
export default class JjpController {
  @operation({
    summary: "Get Jjp",
  })
  @get()
  static getJjp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jjp",
  })
  @post("{id}")
  static createJjp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
