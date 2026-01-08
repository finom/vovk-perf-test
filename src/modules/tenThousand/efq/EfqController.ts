import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efq")
export default class EfqController {
  @operation({
    summary: "Get Efq",
  })
  @get()
  static getEfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efq",
  })
  @post("{id}")
  static createEfq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
