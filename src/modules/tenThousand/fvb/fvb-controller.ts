import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvb")
export default class FvbController {
  @operation({
    summary: "Get Fvb",
  })
  @get()
  static getFvb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fvb",
  })
  @post("{id}")
  static createFvb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
