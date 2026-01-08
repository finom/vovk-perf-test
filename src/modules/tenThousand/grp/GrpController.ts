import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("grp")
export default class GrpController {
  @operation({
    summary: "Get Grp",
  })
  @get()
  static getGrp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grp",
  })
  @post("{id}")
  static createGrp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
