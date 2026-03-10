import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gg")
export default class GgController {
  @operation({
    summary: "Get Gg",
  })
  @get()
  static getGg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gg",
  })
  @post("{id}")
  static createGg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
