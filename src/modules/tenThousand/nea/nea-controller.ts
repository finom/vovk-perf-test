import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nea")
export default class NeaController {
  @operation({
    summary: "Get Nea",
  })
  @get()
  static getNea = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nea",
  })
  @post("{id}")
  static createNea = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
