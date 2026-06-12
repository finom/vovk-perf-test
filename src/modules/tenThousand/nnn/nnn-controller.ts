import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nnn")
export default class NnnController {
  @operation({
    summary: "Get Nnn",
  })
  @get()
  static getNnn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nnn",
  })
  @post("{id}")
  static createNnn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
