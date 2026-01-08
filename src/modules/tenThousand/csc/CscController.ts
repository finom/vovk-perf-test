import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csc")
export default class CscController {
  @operation({
    summary: "Get Csc",
  })
  @get()
  static getCsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csc",
  })
  @post("{id}")
  static createCsc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
