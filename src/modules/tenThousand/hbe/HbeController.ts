import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbe")
export default class HbeController {
  @operation({
    summary: "Get Hbe",
  })
  @get()
  static getHbe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hbe",
  })
  @post("{id}")
  static createHbe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
