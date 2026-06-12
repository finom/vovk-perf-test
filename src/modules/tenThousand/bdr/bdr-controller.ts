import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdr")
export default class BdrController {
  @operation({
    summary: "Get Bdr",
  })
  @get()
  static getBdr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bdr",
  })
  @post("{id}")
  static createBdr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
