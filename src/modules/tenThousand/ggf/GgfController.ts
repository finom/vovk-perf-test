import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggf")
export default class GgfController {
  @operation({
    summary: "Get Ggf",
  })
  @get()
  static getGgf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ggf",
  })
  @post("{id}")
  static createGgf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
