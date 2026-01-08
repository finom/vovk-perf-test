import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cq")
export default class CqController {
  @operation({
    summary: "Get Cq",
  })
  @get()
  static getCq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cq",
  })
  @post("{id}")
  static createCq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
