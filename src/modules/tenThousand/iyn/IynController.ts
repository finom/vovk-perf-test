import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyn")
export default class IynController {
  @operation({
    summary: "Get Iyn",
  })
  @get()
  static getIyn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyn",
  })
  @post("{id}")
  static createIyn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
