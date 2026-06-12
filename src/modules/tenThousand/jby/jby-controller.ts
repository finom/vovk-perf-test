import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jby")
export default class JbyController {
  @operation({
    summary: "Get Jby",
  })
  @get()
  static getJby = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jby",
  })
  @post("{id}")
  static createJby = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
