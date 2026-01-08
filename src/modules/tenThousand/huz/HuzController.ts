import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("huz")
export default class HuzController {
  @operation({
    summary: "Get Huz",
  })
  @get()
  static getHuz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Huz",
  })
  @post("{id}")
  static createHuz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
