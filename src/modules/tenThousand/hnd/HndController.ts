import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hnd")
export default class HndController {
  @operation({
    summary: "Get Hnd",
  })
  @get()
  static getHnd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnd",
  })
  @post("{id}")
  static createHnd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
