import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("etw")
export default class EtwController {
  @operation({
    summary: "Get Etw",
  })
  @get()
  static getEtw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etw",
  })
  @post("{id}")
  static createEtw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
