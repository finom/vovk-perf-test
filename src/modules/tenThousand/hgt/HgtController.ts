import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgt")
export default class HgtController {
  @operation({
    summary: "Get Hgt",
  })
  @get()
  static getHgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgt",
  })
  @post("{id}")
  static createHgt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
