import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("u")
export default class UController {
  @operation({
    summary: "Get U",
  })
  @get()
  static getU = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create U",
  })
  @post("{id}")
  static createU = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
