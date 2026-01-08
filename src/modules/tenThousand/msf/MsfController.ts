import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msf")
export default class MsfController {
  @operation({
    summary: "Get Msf",
  })
  @get()
  static getMsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msf",
  })
  @post("{id}")
  static createMsf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
