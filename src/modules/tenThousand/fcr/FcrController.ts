import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fcr")
export default class FcrController {
  @operation({
    summary: "Get Fcr",
  })
  @get()
  static getFcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcr",
  })
  @post("{id}")
  static createFcr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
