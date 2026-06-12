import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("naf")
export default class NafController {
  @operation({
    summary: "Get Naf",
  })
  @get()
  static getNaf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Naf",
  })
  @post("{id}")
  static createNaf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
