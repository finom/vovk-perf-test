import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ara")
export default class AraController {
  @operation({
    summary: "Get Ara",
  })
  @get()
  static getAra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ara",
  })
  @post("{id}")
  static createAra = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
