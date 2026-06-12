import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbz")
export default class JbzController {
  @operation({
    summary: "Get Jbz",
  })
  @get()
  static getJbz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jbz",
  })
  @post("{id}")
  static createJbz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
