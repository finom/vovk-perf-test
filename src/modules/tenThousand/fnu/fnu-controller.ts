import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fnu")
export default class FnuController {
  @operation({
    summary: "Get Fnu",
  })
  @get()
  static getFnu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fnu",
  })
  @post("{id}")
  static createFnu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
