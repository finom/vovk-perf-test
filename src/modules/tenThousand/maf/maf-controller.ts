import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("maf")
export default class MafController {
  @operation({
    summary: "Get Maf",
  })
  @get()
  static getMaf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Maf",
  })
  @post("{id}")
  static createMaf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
