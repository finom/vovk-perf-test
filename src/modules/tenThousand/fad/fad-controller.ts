import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fad")
export default class FadController {
  @operation({
    summary: "Get Fad",
  })
  @get()
  static getFad = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fad",
  })
  @post("{id}")
  static createFad = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
