import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmg")
export default class HmgController {
  @operation({
    summary: "Get Hmg",
  })
  @get()
  static getHmg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmg",
  })
  @post("{id}")
  static createHmg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
