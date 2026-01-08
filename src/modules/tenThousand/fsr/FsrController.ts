import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsr")
export default class FsrController {
  @operation({
    summary: "Get Fsr",
  })
  @get()
  static getFsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsr",
  })
  @post("{id}")
  static createFsr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
