import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvh")
export default class MvhController {
  @operation({
    summary: "Get Mvh",
  })
  @get()
  static getMvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvh",
  })
  @post("{id}")
  static createMvh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
