import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cat")
export default class CatController {
  @operation({
    summary: "Get Cat",
  })
  @get()
  static getCat = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cat",
  })
  @post("{id}")
  static createCat = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
