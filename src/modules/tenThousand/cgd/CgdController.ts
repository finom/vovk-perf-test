import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgd")
export default class CgdController {
  @operation({
    summary: "Get Cgd",
  })
  @get()
  static getCgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgd",
  })
  @post("{id}")
  static createCgd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
