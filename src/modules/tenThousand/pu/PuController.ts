import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("pu")
export default class PuController {
  @operation({
    summary: "Get Pu",
  })
  @get()
  static getPu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pu",
  })
  @post("{id}")
  static createPu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
