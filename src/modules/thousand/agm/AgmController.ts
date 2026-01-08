import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agm")
export default class AgmController {
  @operation({
    summary: "Get Agm",
  })
  @get()
  static getAgm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agm",
  })
  @post("{id}")
  static createAgm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
