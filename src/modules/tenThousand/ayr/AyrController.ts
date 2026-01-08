import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayr")
export default class AyrController {
  @operation({
    summary: "Get Ayr",
  })
  @get()
  static getAyr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayr",
  })
  @post("{id}")
  static createAyr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
