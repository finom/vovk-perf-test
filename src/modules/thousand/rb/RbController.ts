import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("rb")
export default class RbController {
  @operation({
    summary: "Get Rb",
  })
  @get()
  static getRb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rb",
  })
  @post("{id}")
  static createRb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
