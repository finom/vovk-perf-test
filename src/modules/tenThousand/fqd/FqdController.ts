import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqd")
export default class FqdController {
  @operation({
    summary: "Get Fqd",
  })
  @get()
  static getFqd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fqd",
  })
  @post("{id}")
  static createFqd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
