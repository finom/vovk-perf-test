import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("brc")
export default class BrcController {
  @operation({
    summary: "Get Brc",
  })
  @get()
  static getBrc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Brc",
  })
  @post("{id}")
  static createBrc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
