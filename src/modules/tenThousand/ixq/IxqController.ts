import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixq")
export default class IxqController {
  @operation({
    summary: "Get Ixq",
  })
  @get()
  static getIxq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixq",
  })
  @post("{id}")
  static createIxq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
