import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khy")
export default class KhyController {
  @operation({
    summary: "Get Khy",
  })
  @get()
  static getKhy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khy",
  })
  @post("{id}")
  static createKhy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
