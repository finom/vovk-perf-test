import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggd")
export default class GgdController {
  @operation({
    summary: "Get Ggd",
  })
  @get()
  static getGgd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ggd",
  })
  @post("{id}")
  static createGgd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
