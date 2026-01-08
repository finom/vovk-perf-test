import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghf")
export default class GhfController {
  @operation({
    summary: "Get Ghf",
  })
  @get()
  static getGhf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghf",
  })
  @post("{id}")
  static createGhf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
