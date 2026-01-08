import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ctr")
export default class CtrController {
  @operation({
    summary: "Get Ctr",
  })
  @get()
  static getCtr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctr",
  })
  @post("{id}")
  static createCtr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
