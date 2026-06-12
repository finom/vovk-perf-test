import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdt")
export default class GdtController {
  @operation({
    summary: "Get Gdt",
  })
  @get()
  static getGdt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gdt",
  })
  @post("{id}")
  static createGdt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
