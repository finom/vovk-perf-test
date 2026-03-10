import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fni")
export default class FniController {
  @operation({
    summary: "Get Fni",
  })
  @get()
  static getFni = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fni",
  })
  @post("{id}")
  static createFni = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
