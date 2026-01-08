import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbg")
export default class HbgController {
  @operation({
    summary: "Get Hbg",
  })
  @get()
  static getHbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbg",
  })
  @post("{id}")
  static createHbg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
