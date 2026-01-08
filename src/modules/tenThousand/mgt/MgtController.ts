import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgt")
export default class MgtController {
  @operation({
    summary: "Get Mgt",
  })
  @get()
  static getMgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgt",
  })
  @post("{id}")
  static createMgt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
