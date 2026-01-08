import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dld")
export default class DldController {
  @operation({
    summary: "Get Dld",
  })
  @get()
  static getDld = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dld",
  })
  @post("{id}")
  static createDld = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
