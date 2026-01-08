import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hit")
export default class HitController {
  @operation({
    summary: "Get Hit",
  })
  @get()
  static getHit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hit",
  })
  @post("{id}")
  static createHit = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
