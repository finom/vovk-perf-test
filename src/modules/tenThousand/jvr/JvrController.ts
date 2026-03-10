import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvr")
export default class JvrController {
  @operation({
    summary: "Get Jvr",
  })
  @get()
  static getJvr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jvr",
  })
  @post("{id}")
  static createJvr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
