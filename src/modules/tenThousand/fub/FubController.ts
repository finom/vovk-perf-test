import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fub")
export default class FubController {
  @operation({
    summary: "Get Fub",
  })
  @get()
  static getFub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fub",
  })
  @post("{id}")
  static createFub = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
