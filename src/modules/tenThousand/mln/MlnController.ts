import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mln")
export default class MlnController {
  @operation({
    summary: "Get Mln",
  })
  @get()
  static getMln = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mln",
  })
  @post("{id}")
  static createMln = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
