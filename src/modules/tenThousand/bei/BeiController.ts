import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bei")
export default class BeiController {
  @operation({
    summary: "Get Bei",
  })
  @get()
  static getBei = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bei",
  })
  @post("{id}")
  static createBei = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
