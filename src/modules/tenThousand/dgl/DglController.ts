import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgl")
export default class DglController {
  @operation({
    summary: "Get Dgl",
  })
  @get()
  static getDgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgl",
  })
  @post("{id}")
  static createDgl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
