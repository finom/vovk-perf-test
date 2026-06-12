import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqc")
export default class FqcController {
  @operation({
    summary: "Get Fqc",
  })
  @get()
  static getFqc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fqc",
  })
  @post("{id}")
  static createFqc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
