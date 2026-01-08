import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyr")
export default class JyrController {
  @operation({
    summary: "Get Jyr",
  })
  @get()
  static getJyr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyr",
  })
  @post("{id}")
  static createJyr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
