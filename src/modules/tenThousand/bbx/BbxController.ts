import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbx")
export default class BbxController {
  @operation({
    summary: "Get Bbx",
  })
  @get()
  static getBbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbx",
  })
  @post("{id}")
  static createBbx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
