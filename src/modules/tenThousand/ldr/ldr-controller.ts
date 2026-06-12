import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldr")
export default class LdrController {
  @operation({
    summary: "Get Ldr",
  })
  @get()
  static getLdr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ldr",
  })
  @post("{id}")
  static createLdr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
