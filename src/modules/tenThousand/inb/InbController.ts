import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("inb")
export default class InbController {
  @operation({
    summary: "Get Inb",
  })
  @get()
  static getInb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inb",
  })
  @post("{id}")
  static createInb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
