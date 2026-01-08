import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lau")
export default class LauController {
  @operation({
    summary: "Get Lau",
  })
  @get()
  static getLau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lau",
  })
  @post("{id}")
  static createLau = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
