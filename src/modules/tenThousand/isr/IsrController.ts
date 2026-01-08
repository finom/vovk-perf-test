import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("isr")
export default class IsrController {
  @operation({
    summary: "Get Isr",
  })
  @get()
  static getIsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isr",
  })
  @post("{id}")
  static createIsr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
