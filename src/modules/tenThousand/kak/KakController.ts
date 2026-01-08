import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kak")
export default class KakController {
  @operation({
    summary: "Get Kak",
  })
  @get()
  static getKak = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kak",
  })
  @post("{id}")
  static createKak = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
