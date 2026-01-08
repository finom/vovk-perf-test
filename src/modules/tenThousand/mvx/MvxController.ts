import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvx")
export default class MvxController {
  @operation({
    summary: "Get Mvx",
  })
  @get()
  static getMvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvx",
  })
  @post("{id}")
  static createMvx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
