import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fcq")
export default class FcqController {
  @operation({
    summary: "Get Fcq",
  })
  @get()
  static getFcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcq",
  })
  @post("{id}")
  static createFcq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
