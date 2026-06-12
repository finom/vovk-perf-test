import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hce")
export default class HceController {
  @operation({
    summary: "Get Hce",
  })
  @get()
  static getHce = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hce",
  })
  @post("{id}")
  static createHce = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
