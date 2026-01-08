import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljg")
export default class LjgController {
  @operation({
    summary: "Get Ljg",
  })
  @get()
  static getLjg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljg",
  })
  @post("{id}")
  static createLjg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
