import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixj")
export default class IxjController {
  @operation({
    summary: "Get Ixj",
  })
  @get()
  static getIxj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixj",
  })
  @post("{id}")
  static createIxj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
