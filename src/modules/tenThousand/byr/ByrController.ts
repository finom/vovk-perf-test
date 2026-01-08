import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byr")
export default class ByrController {
  @operation({
    summary: "Get Byr",
  })
  @get()
  static getByr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byr",
  })
  @post("{id}")
  static createByr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
