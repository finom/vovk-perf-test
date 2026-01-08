import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjs")
export default class HjsController {
  @operation({
    summary: "Get Hjs",
  })
  @get()
  static getHjs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjs",
  })
  @post("{id}")
  static createHjs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
