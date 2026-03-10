import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nnu")
export default class NnuController {
  @operation({
    summary: "Get Nnu",
  })
  @get()
  static getNnu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nnu",
  })
  @post("{id}")
  static createNnu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
