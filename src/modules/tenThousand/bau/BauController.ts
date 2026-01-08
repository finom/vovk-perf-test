import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bau")
export default class BauController {
  @operation({
    summary: "Get Bau",
  })
  @get()
  static getBau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bau",
  })
  @post("{id}")
  static createBau = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
