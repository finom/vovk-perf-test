import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ego")
export default class EgoController {
  @operation({
    summary: "Get Ego",
  })
  @get()
  static getEgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ego",
  })
  @post("{id}")
  static createEgo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
