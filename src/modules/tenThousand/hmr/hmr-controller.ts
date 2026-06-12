import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmr")
export default class HmrController {
  @operation({
    summary: "Get Hmr",
  })
  @get()
  static getHmr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hmr",
  })
  @post("{id}")
  static createHmr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
