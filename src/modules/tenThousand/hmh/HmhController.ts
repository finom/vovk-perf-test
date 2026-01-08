import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmh")
export default class HmhController {
  @operation({
    summary: "Get Hmh",
  })
  @get()
  static getHmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmh",
  })
  @post("{id}")
  static createHmh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
