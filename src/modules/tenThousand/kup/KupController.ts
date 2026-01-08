import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kup")
export default class KupController {
  @operation({
    summary: "Get Kup",
  })
  @get()
  static getKup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kup",
  })
  @post("{id}")
  static createKup = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
