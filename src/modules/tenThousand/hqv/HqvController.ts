import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqv")
export default class HqvController {
  @operation({
    summary: "Get Hqv",
  })
  @get()
  static getHqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqv",
  })
  @post("{id}")
  static createHqv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
