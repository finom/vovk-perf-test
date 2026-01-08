import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mek")
export default class MekController {
  @operation({
    summary: "Get Mek",
  })
  @get()
  static getMek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mek",
  })
  @post("{id}")
  static createMek = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
