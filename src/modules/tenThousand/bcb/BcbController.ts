import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bcb")
export default class BcbController {
  @operation({
    summary: "Get Bcb",
  })
  @get()
  static getBcb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bcb",
  })
  @post("{id}")
  static createBcb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
