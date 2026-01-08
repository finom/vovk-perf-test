import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsw")
export default class LswController {
  @operation({
    summary: "Get Lsw",
  })
  @get()
  static getLsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsw",
  })
  @post("{id}")
  static createLsw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
