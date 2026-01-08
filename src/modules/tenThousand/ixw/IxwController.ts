import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixw")
export default class IxwController {
  @operation({
    summary: "Get Ixw",
  })
  @get()
  static getIxw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixw",
  })
  @post("{id}")
  static createIxw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
