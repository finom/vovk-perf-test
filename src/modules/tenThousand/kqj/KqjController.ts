import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqj")
export default class KqjController {
  @operation({
    summary: "Get Kqj",
  })
  @get()
  static getKqj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqj",
  })
  @post("{id}")
  static createKqj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
