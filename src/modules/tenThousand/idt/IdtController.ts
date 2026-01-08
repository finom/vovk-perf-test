import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idt")
export default class IdtController {
  @operation({
    summary: "Get Idt",
  })
  @get()
  static getIdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idt",
  })
  @post("{id}")
  static createIdt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
