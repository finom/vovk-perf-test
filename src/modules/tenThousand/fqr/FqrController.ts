import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqr")
export default class FqrController {
  @operation({
    summary: "Get Fqr",
  })
  @get()
  static getFqr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fqr",
  })
  @post("{id}")
  static createFqr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
