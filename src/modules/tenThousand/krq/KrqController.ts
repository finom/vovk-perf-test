import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("krq")
export default class KrqController {
  @operation({
    summary: "Get Krq",
  })
  @get()
  static getKrq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krq",
  })
  @post("{id}")
  static createKrq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
