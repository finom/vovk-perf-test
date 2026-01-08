import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmn")
export default class HmnController {
  @operation({
    summary: "Get Hmn",
  })
  @get()
  static getHmn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmn",
  })
  @post("{id}")
  static createHmn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
