import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpy")
export default class MpyController {
  @operation({
    summary: "Get Mpy",
  })
  @get()
  static getMpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpy",
  })
  @post("{id}")
  static createMpy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
