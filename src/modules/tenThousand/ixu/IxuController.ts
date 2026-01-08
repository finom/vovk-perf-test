import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixu")
export default class IxuController {
  @operation({
    summary: "Get Ixu",
  })
  @get()
  static getIxu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixu",
  })
  @post("{id}")
  static createIxu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
