import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("isf")
export default class IsfController {
  @operation({
    summary: "Get Isf",
  })
  @get()
  static getIsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isf",
  })
  @post("{id}")
  static createIsf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
