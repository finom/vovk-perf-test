import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdg")
export default class BdgController {
  @operation({
    summary: "Get Bdg",
  })
  @get()
  static getBdg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdg",
  })
  @post("{id}")
  static createBdg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
