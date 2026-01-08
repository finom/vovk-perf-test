import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmw")
export default class HmwController {
  @operation({
    summary: "Get Hmw",
  })
  @get()
  static getHmw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmw",
  })
  @post("{id}")
  static createHmw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
