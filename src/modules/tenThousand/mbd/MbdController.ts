import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbd")
export default class MbdController {
  @operation({
    summary: "Get Mbd",
  })
  @get()
  static getMbd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbd",
  })
  @post("{id}")
  static createMbd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
