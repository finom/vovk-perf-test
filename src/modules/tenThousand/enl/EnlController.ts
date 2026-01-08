import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("enl")
export default class EnlController {
  @operation({
    summary: "Get Enl",
  })
  @get()
  static getEnl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enl",
  })
  @post("{id}")
  static createEnl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
