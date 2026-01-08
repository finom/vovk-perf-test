import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhi")
export default class HhiController {
  @operation({
    summary: "Get Hhi",
  })
  @get()
  static getHhi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhi",
  })
  @post("{id}")
  static createHhi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
