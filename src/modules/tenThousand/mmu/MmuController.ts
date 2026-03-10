import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmu")
export default class MmuController {
  @operation({
    summary: "Get Mmu",
  })
  @get()
  static getMmu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mmu",
  })
  @post("{id}")
  static createMmu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
