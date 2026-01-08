import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("htz")
export default class HtzController {
  @operation({
    summary: "Get Htz",
  })
  @get()
  static getHtz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htz",
  })
  @post("{id}")
  static createHtz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
