import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cng")
export default class CngController {
  @operation({
    summary: "Get Cng",
  })
  @get()
  static getCng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cng",
  })
  @post("{id}")
  static createCng = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
