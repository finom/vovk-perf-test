import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fq")
export default class FqController {
  @operation({
    summary: "Get Fq",
  })
  @get()
  static getFq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fq",
  })
  @post("{id}")
  static createFq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
