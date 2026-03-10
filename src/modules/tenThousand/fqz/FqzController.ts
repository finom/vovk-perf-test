import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqz")
export default class FqzController {
  @operation({
    summary: "Get Fqz",
  })
  @get()
  static getFqz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fqz",
  })
  @post("{id}")
  static createFqz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
