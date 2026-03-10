import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hlk")
export default class HlkController {
  @operation({
    summary: "Get Hlk",
  })
  @get()
  static getHlk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hlk",
  })
  @post("{id}")
  static createHlk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
