import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvz")
export default class MvzController {
  @operation({
    summary: "Get Mvz",
  })
  @get()
  static getMvz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvz",
  })
  @post("{id}")
  static createMvz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
