import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awt")
export default class AwtController {
  @operation({
    summary: "Get Awt",
  })
  @get()
  static getAwt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Awt",
  })
  @post("{id}")
  static createAwt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
