import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kih")
export default class KihController {
  @operation({
    summary: "Get Kih",
  })
  @get()
  static getKih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kih",
  })
  @post("{id}")
  static createKih = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
