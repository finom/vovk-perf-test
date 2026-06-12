import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxv")
export default class BxvController {
  @operation({
    summary: "Get Bxv",
  })
  @get()
  static getBxv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bxv",
  })
  @post("{id}")
  static createBxv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
