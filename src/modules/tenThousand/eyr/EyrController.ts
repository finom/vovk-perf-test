import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyr")
export default class EyrController {
  @operation({
    summary: "Get Eyr",
  })
  @get()
  static getEyr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyr",
  })
  @post("{id}")
  static createEyr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
