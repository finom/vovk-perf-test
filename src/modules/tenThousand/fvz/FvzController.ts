import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvz")
export default class FvzController {
  @operation({
    summary: "Get Fvz",
  })
  @get()
  static getFvz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fvz",
  })
  @post("{id}")
  static createFvz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
