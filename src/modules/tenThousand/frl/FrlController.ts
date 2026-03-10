import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("frl")
export default class FrlController {
  @operation({
    summary: "Get Frl",
  })
  @get()
  static getFrl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Frl",
  })
  @post("{id}")
  static createFrl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
