import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fu")
export default class FuController {
  @operation({
    summary: "Get Fu",
  })
  @get()
  static getFu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fu",
  })
  @post("{id}")
  static createFu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
