import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jnn")
export default class JnnController {
  @operation({
    summary: "Get Jnn",
  })
  @get()
  static getJnn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jnn",
  })
  @post("{id}")
  static createJnn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
