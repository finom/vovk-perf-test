import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lra")
export default class LraController {
  @operation({
    summary: "Get Lra",
  })
  @get()
  static getLra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lra",
  })
  @post("{id}")
  static createLra = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
