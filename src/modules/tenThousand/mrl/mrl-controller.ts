import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mrl")
export default class MrlController {
  @operation({
    summary: "Get Mrl",
  })
  @get()
  static getMrl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mrl",
  })
  @post("{id}")
  static createMrl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
