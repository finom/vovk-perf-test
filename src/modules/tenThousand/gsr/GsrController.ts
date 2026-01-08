import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsr")
export default class GsrController {
  @operation({
    summary: "Get Gsr",
  })
  @get()
  static getGsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsr",
  })
  @post("{id}")
  static createGsr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
