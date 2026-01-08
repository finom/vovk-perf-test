import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hag")
export default class HagController {
  @operation({
    summary: "Get Hag",
  })
  @get()
  static getHag = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hag",
  })
  @post("{id}")
  static createHag = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
