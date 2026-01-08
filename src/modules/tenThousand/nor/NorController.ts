import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nor")
export default class NorController {
  @operation({
    summary: "Get Nor",
  })
  @get()
  static getNor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nor",
  })
  @post("{id}")
  static createNor = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
