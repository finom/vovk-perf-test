import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("er")
export default class ErController {
  @operation({
    summary: "Get Er",
  })
  @get()
  static getEr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Er",
  })
  @post("{id}")
  static createEr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
