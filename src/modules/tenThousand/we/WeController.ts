import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("we")
export default class WeController {
  @operation({
    summary: "Get We",
  })
  @get()
  static getWe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create We",
  })
  @post("{id}")
  static createWe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
