import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jcl")
export default class JclController {
  @operation({
    summary: "Get Jcl",
  })
  @get()
  static getJcl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jcl",
  })
  @post("{id}")
  static createJcl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
