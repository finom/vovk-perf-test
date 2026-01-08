import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kkx")
export default class KkxController {
  @operation({
    summary: "Get Kkx",
  })
  @get()
  static getKkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkx",
  })
  @post("{id}")
  static createKkx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
