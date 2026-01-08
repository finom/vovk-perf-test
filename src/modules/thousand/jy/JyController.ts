import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jy")
export default class JyController {
  @operation({
    summary: "Get Jy",
  })
  @get()
  static getJy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jy",
  })
  @post("{id}")
  static createJy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
