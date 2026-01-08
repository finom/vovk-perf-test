import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmb")
export default class HmbController {
  @operation({
    summary: "Get Hmb",
  })
  @get()
  static getHmb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmb",
  })
  @post("{id}")
  static createHmb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
