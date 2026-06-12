import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("sa")
export default class SaController {
  @operation({
    summary: "Get Sa",
  })
  @get()
  static getSa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Sa",
  })
  @post("{id}")
  static createSa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
