import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nn")
export default class NnController {
  @operation({
    summary: "Get Nn",
  })
  @get()
  static getNn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nn",
  })
  @post("{id}")
  static createNn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
