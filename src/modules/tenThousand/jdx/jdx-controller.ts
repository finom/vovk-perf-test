import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdx")
export default class JdxController {
  @operation({
    summary: "Get Jdx",
  })
  @get()
  static getJdx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jdx",
  })
  @post("{id}")
  static createJdx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
