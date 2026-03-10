import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bip")
export default class BipController {
  @operation({
    summary: "Get Bip",
  })
  @get()
  static getBip = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bip",
  })
  @post("{id}")
  static createBip = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
