import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpg")
export default class DpgController {
  @operation({
    summary: "Get Dpg",
  })
  @get()
  static getDpg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpg",
  })
  @post("{id}")
  static createDpg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
