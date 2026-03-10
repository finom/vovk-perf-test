import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("liv")
export default class LivController {
  @operation({
    summary: "Get Liv",
  })
  @get()
  static getLiv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Liv",
  })
  @post("{id}")
  static createLiv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
