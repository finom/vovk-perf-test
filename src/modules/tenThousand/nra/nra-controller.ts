import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nra")
export default class NraController {
  @operation({
    summary: "Get Nra",
  })
  @get()
  static getNra = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nra",
  })
  @post("{id}")
  static createNra = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
