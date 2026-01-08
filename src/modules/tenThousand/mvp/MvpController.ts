import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvp")
export default class MvpController {
  @operation({
    summary: "Get Mvp",
  })
  @get()
  static getMvp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvp",
  })
  @post("{id}")
  static createMvp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
