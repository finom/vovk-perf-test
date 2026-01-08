import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbx")
export default class MbxController {
  @operation({
    summary: "Get Mbx",
  })
  @get()
  static getMbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbx",
  })
  @post("{id}")
  static createMbx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
