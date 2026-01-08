import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cry")
export default class CryController {
  @operation({
    summary: "Get Cry",
  })
  @get()
  static getCry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cry",
  })
  @post("{id}")
  static createCry = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
