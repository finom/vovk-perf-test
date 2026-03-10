import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gem")
export default class GemController {
  @operation({
    summary: "Get Gem",
  })
  @get()
  static getGem = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gem",
  })
  @post("{id}")
  static createGem = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
