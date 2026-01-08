import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbx")
export default class LbxController {
  @operation({
    summary: "Get Lbx",
  })
  @get()
  static getLbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbx",
  })
  @post("{id}")
  static createLbx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
