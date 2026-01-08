import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("acs")
export default class AcsController {
  @operation({
    summary: "Get Acs",
  })
  @get()
  static getAcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acs",
  })
  @post("{id}")
  static createAcs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
