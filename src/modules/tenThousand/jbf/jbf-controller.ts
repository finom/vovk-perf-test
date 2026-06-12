import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbf")
export default class JbfController {
  @operation({
    summary: "Get Jbf",
  })
  @get()
  static getJbf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jbf",
  })
  @post("{id}")
  static createJbf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
