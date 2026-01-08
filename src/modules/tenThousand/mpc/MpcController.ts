import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpc")
export default class MpcController {
  @operation({
    summary: "Get Mpc",
  })
  @get()
  static getMpc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpc",
  })
  @post("{id}")
  static createMpc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
