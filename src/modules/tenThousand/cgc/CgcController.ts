import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgc")
export default class CgcController {
  @operation({
    summary: "Get Cgc",
  })
  @get()
  static getCgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgc",
  })
  @post("{id}")
  static createCgc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
