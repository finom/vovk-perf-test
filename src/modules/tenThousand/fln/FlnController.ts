import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fln")
export default class FlnController {
  @operation({
    summary: "Get Fln",
  })
  @get()
  static getFln = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fln",
  })
  @post("{id}")
  static createFln = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
