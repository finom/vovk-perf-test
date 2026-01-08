import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gh")
export default class GhController {
  @operation({
    summary: "Get Gh",
  })
  @get()
  static getGh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gh",
  })
  @post("{id}")
  static createGh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
