import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfw")
export default class HfwController {
  @operation({
    summary: "Get Hfw",
  })
  @get()
  static getHfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfw",
  })
  @post("{id}")
  static createHfw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
