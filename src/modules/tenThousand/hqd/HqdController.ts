import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqd")
export default class HqdController {
  @operation({
    summary: "Get Hqd",
  })
  @get()
  static getHqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqd",
  })
  @post("{id}")
  static createHqd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
