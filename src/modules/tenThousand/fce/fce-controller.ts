import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fce")
export default class FceController {
  @operation({
    summary: "Get Fce",
  })
  @get()
  static getFce = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fce",
  })
  @post("{id}")
  static createFce = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
