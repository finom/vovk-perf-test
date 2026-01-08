import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvd")
export default class MvdController {
  @operation({
    summary: "Get Mvd",
  })
  @get()
  static getMvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvd",
  })
  @post("{id}")
  static createMvd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
