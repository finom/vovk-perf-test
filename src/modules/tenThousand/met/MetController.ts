import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("met")
export default class MetController {
  @operation({
    summary: "Get Met",
  })
  @get()
  static getMet = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Met",
  })
  @post("{id}")
  static createMet = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
