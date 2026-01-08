import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvv")
export default class MvvController {
  @operation({
    summary: "Get Mvv",
  })
  @get()
  static getMvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvv",
  })
  @post("{id}")
  static createMvv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
