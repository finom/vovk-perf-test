import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bcu")
export default class BcuController {
  @operation({
    summary: "Get Bcu",
  })
  @get()
  static getBcu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcu",
  })
  @post("{id}")
  static createBcu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
