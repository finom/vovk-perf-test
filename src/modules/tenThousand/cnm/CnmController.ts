import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cnm")
export default class CnmController {
  @operation({
    summary: "Get Cnm",
  })
  @get()
  static getCnm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnm",
  })
  @post("{id}")
  static createCnm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
