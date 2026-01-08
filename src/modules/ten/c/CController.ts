import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("c")
export default class CController {
  @operation({
    summary: "Get C",
  })
  @get()
  static getC = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create C",
  })
  @post("{id}")
  static createC = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
