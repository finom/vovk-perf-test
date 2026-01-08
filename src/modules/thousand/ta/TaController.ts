import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ta")
export default class TaController {
  @operation({
    summary: "Get Ta",
  })
  @get()
  static getTa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ta",
  })
  @post("{id}")
  static createTa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
