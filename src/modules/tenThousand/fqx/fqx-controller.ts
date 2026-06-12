import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqx")
export default class FqxController {
  @operation({
    summary: "Get Fqx",
  })
  @get()
  static getFqx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fqx",
  })
  @post("{id}")
  static createFqx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
