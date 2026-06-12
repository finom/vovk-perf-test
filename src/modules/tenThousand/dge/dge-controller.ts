import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dge")
export default class DgeController {
  @operation({
    summary: "Get Dge",
  })
  @get()
  static getDge = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dge",
  })
  @post("{id}")
  static createDge = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
