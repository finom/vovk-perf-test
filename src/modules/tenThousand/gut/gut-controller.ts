import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gut")
export default class GutController {
  @operation({
    summary: "Get Gut",
  })
  @get()
  static getGut = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gut",
  })
  @post("{id}")
  static createGut = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
