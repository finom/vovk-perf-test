import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqw")
export default class FqwController {
  @operation({
    summary: "Get Fqw",
  })
  @get()
  static getFqw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fqw",
  })
  @post("{id}")
  static createFqw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
