import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hek")
export default class HekController {
  @operation({
    summary: "Get Hek",
  })
  @get()
  static getHek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hek",
  })
  @post("{id}")
  static createHek = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
