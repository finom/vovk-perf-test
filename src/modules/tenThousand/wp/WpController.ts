import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wp")
export default class WpController {
  @operation({
    summary: "Get Wp",
  })
  @get()
  static getWp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wp",
  })
  @post("{id}")
  static createWp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
