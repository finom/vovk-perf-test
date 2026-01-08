import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dg")
export default class DgController {
  @operation({
    summary: "Get Dg",
  })
  @get()
  static getDg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dg",
  })
  @post("{id}")
  static createDg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
