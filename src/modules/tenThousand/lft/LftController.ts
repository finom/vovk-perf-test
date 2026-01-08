import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lft")
export default class LftController {
  @operation({
    summary: "Get Lft",
  })
  @get()
  static getLft = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lft",
  })
  @post("{id}")
  static createLft = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
