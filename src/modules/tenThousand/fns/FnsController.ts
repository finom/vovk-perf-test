import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fns")
export default class FnsController {
  @operation({
    summary: "Get Fns",
  })
  @get()
  static getFns = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fns",
  })
  @post("{id}")
  static createFns = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
