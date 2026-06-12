import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqg")
export default class FqgController {
  @operation({
    summary: "Get Fqg",
  })
  @get()
  static getFqg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fqg",
  })
  @post("{id}")
  static createFqg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
