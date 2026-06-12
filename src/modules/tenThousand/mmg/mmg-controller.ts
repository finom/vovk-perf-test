import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmg")
export default class MmgController {
  @operation({
    summary: "Get Mmg",
  })
  @get()
  static getMmg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mmg",
  })
  @post("{id}")
  static createMmg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
