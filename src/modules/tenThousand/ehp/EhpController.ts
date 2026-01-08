import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehp")
export default class EhpController {
  @operation({
    summary: "Get Ehp",
  })
  @get()
  static getEhp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehp",
  })
  @post("{id}")
  static createEhp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
