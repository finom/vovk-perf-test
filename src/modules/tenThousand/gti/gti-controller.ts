import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gti")
export default class GtiController {
  @operation({
    summary: "Get Gti",
  })
  @get()
  static getGti = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gti",
  })
  @post("{id}")
  static createGti = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
