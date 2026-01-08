import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgq")
export default class CgqController {
  @operation({
    summary: "Get Cgq",
  })
  @get()
  static getCgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgq",
  })
  @post("{id}")
  static createCgq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
