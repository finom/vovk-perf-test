import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ol")
export default class OlController {
  @operation({
    summary: "Get Ol",
  })
  @get()
  static getOl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ol",
  })
  @post("{id}")
  static createOl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
