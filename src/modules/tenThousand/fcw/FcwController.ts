import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fcw")
export default class FcwController {
  @operation({
    summary: "Get Fcw",
  })
  @get()
  static getFcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcw",
  })
  @post("{id}")
  static createFcw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
