import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hcc")
export default class HccController {
  @operation({
    summary: "Get Hcc",
  })
  @get()
  static getHcc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hcc",
  })
  @post("{id}")
  static createHcc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
