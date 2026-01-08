import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqx")
export default class KqxController {
  @operation({
    summary: "Get Kqx",
  })
  @get()
  static getKqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqx",
  })
  @post("{id}")
  static createKqx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
