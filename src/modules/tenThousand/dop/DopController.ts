import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dop")
export default class DopController {
  @operation({
    summary: "Get Dop",
  })
  @get()
  static getDop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dop",
  })
  @post("{id}")
  static createDop = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
