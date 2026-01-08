import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzt")
export default class MztController {
  @operation({
    summary: "Get Mzt",
  })
  @get()
  static getMzt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzt",
  })
  @post("{id}")
  static createMzt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
