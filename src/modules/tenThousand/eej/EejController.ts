import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eej")
export default class EejController {
  @operation({
    summary: "Get Eej",
  })
  @get()
  static getEej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eej",
  })
  @post("{id}")
  static createEej = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
