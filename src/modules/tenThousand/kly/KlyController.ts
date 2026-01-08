import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kly")
export default class KlyController {
  @operation({
    summary: "Get Kly",
  })
  @get()
  static getKly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kly",
  })
  @post("{id}")
  static createKly = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
