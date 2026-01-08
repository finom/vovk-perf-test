import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("guu")
export default class GuuController {
  @operation({
    summary: "Get Guu",
  })
  @get()
  static getGuu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Guu",
  })
  @post("{id}")
  static createGuu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
