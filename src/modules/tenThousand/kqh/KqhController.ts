import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqh")
export default class KqhController {
  @operation({
    summary: "Get Kqh",
  })
  @get()
  static getKqh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqh",
  })
  @post("{id}")
  static createKqh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
