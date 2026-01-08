import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edo")
export default class EdoController {
  @operation({
    summary: "Get Edo",
  })
  @get()
  static getEdo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edo",
  })
  @post("{id}")
  static createEdo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
