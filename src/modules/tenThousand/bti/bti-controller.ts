import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bti")
export default class BtiController {
  @operation({
    summary: "Get Bti",
  })
  @get()
  static getBti = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bti",
  })
  @post("{id}")
  static createBti = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
