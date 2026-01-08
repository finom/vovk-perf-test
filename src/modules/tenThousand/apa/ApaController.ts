import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apa")
export default class ApaController {
  @operation({
    summary: "Get Apa",
  })
  @get()
  static getApa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apa",
  })
  @post("{id}")
  static createApa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
