import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifb")
export default class IfbController {
  @operation({
    summary: "Get Ifb",
  })
  @get()
  static getIfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifb",
  })
  @post("{id}")
  static createIfb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
