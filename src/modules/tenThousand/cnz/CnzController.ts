import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cnz")
export default class CnzController {
  @operation({
    summary: "Get Cnz",
  })
  @get()
  static getCnz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnz",
  })
  @post("{id}")
  static createCnz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
