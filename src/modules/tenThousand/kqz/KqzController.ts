import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqz")
export default class KqzController {
  @operation({
    summary: "Get Kqz",
  })
  @get()
  static getKqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqz",
  })
  @post("{id}")
  static createKqz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
