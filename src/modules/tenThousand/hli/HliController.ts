import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hli")
export default class HliController {
  @operation({
    summary: "Get Hli",
  })
  @get()
  static getHli = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hli",
  })
  @post("{id}")
  static createHli = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
