import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nky")
export default class NkyController {
  @operation({
    summary: "Get Nky",
  })
  @get()
  static getNky = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nky",
  })
  @post("{id}")
  static createNky = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
