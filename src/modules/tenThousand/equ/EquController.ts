import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("equ")
export default class EquController {
  @operation({
    summary: "Get Equ",
  })
  @get()
  static getEqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Equ",
  })
  @post("{id}")
  static createEqu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
