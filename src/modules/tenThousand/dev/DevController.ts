import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dev")
export default class DevController {
  @operation({
    summary: "Get Dev",
  })
  @get()
  static getDev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dev",
  })
  @post("{id}")
  static createDev = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
