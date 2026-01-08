import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fav")
export default class FavController {
  @operation({
    summary: "Get Fav",
  })
  @get()
  static getFav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fav",
  })
  @post("{id}")
  static createFav = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
