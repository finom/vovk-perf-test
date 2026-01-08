import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lww")
export default class LwwController {
  @operation({
    summary: "Get Lww",
  })
  @get()
  static getLww = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lww",
  })
  @post("{id}")
  static createLww = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
