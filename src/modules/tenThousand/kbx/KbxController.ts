import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbx")
export default class KbxController {
  @operation({
    summary: "Get Kbx",
  })
  @get()
  static getKbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbx",
  })
  @post("{id}")
  static createKbx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
