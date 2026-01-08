import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("knm")
export default class KnmController {
  @operation({
    summary: "Get Knm",
  })
  @get()
  static getKnm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knm",
  })
  @post("{id}")
  static createKnm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
