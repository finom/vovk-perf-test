import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abk")
export default class AbkController {
  @operation({
    summary: "Get Abk",
  })
  @get()
  static getAbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abk",
  })
  @post("{id}")
  static createAbk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
