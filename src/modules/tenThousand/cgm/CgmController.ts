import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgm")
export default class CgmController {
  @operation({
    summary: "Get Cgm",
  })
  @get()
  static getCgm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgm",
  })
  @post("{id}")
  static createCgm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
