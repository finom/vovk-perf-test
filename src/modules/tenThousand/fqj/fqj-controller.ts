import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqj")
export default class FqjController {
  @operation({
    summary: "Get Fqj",
  })
  @get()
  static getFqj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fqj",
  })
  @post("{id}")
  static createFqj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
