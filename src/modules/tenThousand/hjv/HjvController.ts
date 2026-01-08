import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjv")
export default class HjvController {
  @operation({
    summary: "Get Hjv",
  })
  @get()
  static getHjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjv",
  })
  @post("{id}")
  static createHjv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
