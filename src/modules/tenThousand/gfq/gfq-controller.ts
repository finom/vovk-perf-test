import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfq")
export default class GfqController {
  @operation({
    summary: "Get Gfq",
  })
  @get()
  static getGfq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gfq",
  })
  @post("{id}")
  static createGfq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
