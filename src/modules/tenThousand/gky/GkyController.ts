import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gky")
export default class GkyController {
  @operation({
    summary: "Get Gky",
  })
  @get()
  static getGky = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gky",
  })
  @post("{id}")
  static createGky = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
