import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eoj")
export default class EojController {
  @operation({
    summary: "Get Eoj",
  })
  @get()
  static getEoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eoj",
  })
  @post("{id}")
  static createEoj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
