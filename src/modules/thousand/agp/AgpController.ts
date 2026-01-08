import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agp")
export default class AgpController {
  @operation({
    summary: "Get Agp",
  })
  @get()
  static getAgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agp",
  })
  @post("{id}")
  static createAgp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
