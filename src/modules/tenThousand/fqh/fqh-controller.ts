import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqh")
export default class FqhController {
  @operation({
    summary: "Get Fqh",
  })
  @get()
  static getFqh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fqh",
  })
  @post("{id}")
  static createFqh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
