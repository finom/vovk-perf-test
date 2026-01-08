import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsm")
export default class FsmController {
  @operation({
    summary: "Get Fsm",
  })
  @get()
  static getFsm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsm",
  })
  @post("{id}")
  static createFsm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
