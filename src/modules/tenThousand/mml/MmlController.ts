import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mml")
export default class MmlController {
  @operation({
    summary: "Get Mml",
  })
  @get()
  static getMml = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mml",
  })
  @post("{id}")
  static createMml = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
