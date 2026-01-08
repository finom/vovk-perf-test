import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ke")
export default class KeController {
  @operation({
    summary: "Get Ke",
  })
  @get()
  static getKe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ke",
  })
  @post("{id}")
  static createKe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
