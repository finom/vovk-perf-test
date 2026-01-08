import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agq")
export default class AgqController {
  @operation({
    summary: "Get Agq",
  })
  @get()
  static getAgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agq",
  })
  @post("{id}")
  static createAgq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
