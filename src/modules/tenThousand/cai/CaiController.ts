import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cai")
export default class CaiController {
  @operation({
    summary: "Get Cai",
  })
  @get()
  static getCai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cai",
  })
  @post("{id}")
  static createCai = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
