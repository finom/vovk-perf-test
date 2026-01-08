import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("don")
export default class DonController {
  @operation({
    summary: "Get Don",
  })
  @get()
  static getDon = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Don",
  })
  @post("{id}")
  static createDon = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
