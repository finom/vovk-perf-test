import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbx")
export default class HbxController {
  @operation({
    summary: "Get Hbx",
  })
  @get()
  static getHbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbx",
  })
  @post("{id}")
  static createHbx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
