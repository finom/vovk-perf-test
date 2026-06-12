import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fez")
export default class FezController {
  @operation({
    summary: "Get Fez",
  })
  @get()
  static getFez = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fez",
  })
  @post("{id}")
  static createFez = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
