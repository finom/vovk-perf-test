import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ney")
export default class NeyController {
  @operation({
    summary: "Get Ney",
  })
  @get()
  static getNey = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ney",
  })
  @post("{id}")
  static createNey = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
