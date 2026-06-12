import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggk")
export default class GgkController {
  @operation({
    summary: "Get Ggk",
  })
  @get()
  static getGgk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ggk",
  })
  @post("{id}")
  static createGgk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
