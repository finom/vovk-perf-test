import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("new")
export default class NewController {
  @operation({
    summary: "Get New",
  })
  @get()
  static getNew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create New",
  })
  @post("{id}")
  static createNew = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
