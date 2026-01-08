import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msq")
export default class MsqController {
  @operation({
    summary: "Get Msq",
  })
  @get()
  static getMsq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msq",
  })
  @post("{id}")
  static createMsq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
