import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixg")
export default class IxgController {
  @operation({
    summary: "Get Ixg",
  })
  @get()
  static getIxg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixg",
  })
  @post("{id}")
  static createIxg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
