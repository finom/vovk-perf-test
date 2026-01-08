import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kax")
export default class KaxController {
  @operation({
    summary: "Get Kax",
  })
  @get()
  static getKax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kax",
  })
  @post("{id}")
  static createKax = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
