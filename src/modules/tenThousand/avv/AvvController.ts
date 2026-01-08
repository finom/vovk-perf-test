import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avv")
export default class AvvController {
  @operation({
    summary: "Get Avv",
  })
  @get()
  static getAvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avv",
  })
  @post("{id}")
  static createAvv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
