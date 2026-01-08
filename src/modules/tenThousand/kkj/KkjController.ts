import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kkj")
export default class KkjController {
  @operation({
    summary: "Get Kkj",
  })
  @get()
  static getKkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkj",
  })
  @post("{id}")
  static createKkj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
