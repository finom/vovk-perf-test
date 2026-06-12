import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqo")
export default class FqoController {
  @operation({
    summary: "Get Fqo",
  })
  @get()
  static getFqo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fqo",
  })
  @post("{id}")
  static createFqo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
