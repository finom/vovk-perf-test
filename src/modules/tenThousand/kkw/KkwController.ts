import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kkw")
export default class KkwController {
  @operation({
    summary: "Get Kkw",
  })
  @get()
  static getKkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkw",
  })
  @post("{id}")
  static createKkw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
