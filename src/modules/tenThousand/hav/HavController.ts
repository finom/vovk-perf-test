import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hav")
export default class HavController {
  @operation({
    summary: "Get Hav",
  })
  @get()
  static getHav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hav",
  })
  @post("{id}")
  static createHav = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
