import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbz")
export default class BbzController {
  @operation({
    summary: "Get Bbz",
  })
  @get()
  static getBbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbz",
  })
  @post("{id}")
  static createBbz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
