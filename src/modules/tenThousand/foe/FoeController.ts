import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("foe")
export default class FoeController {
  @operation({
    summary: "Get Foe",
  })
  @get()
  static getFoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Foe",
  })
  @post("{id}")
  static createFoe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
