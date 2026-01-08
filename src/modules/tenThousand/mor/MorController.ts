import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mor")
export default class MorController {
  @operation({
    summary: "Get Mor",
  })
  @get()
  static getMor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mor",
  })
  @post("{id}")
  static createMor = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
