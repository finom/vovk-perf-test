import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bph")
export default class BphController {
  @operation({
    summary: "Get Bph",
  })
  @get()
  static getBph = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bph",
  })
  @post("{id}")
  static createBph = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
