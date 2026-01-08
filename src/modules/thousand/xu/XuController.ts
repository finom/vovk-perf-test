import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xu")
export default class XuController {
  @operation({
    summary: "Get Xu",
  })
  @get()
  static getXu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xu",
  })
  @post("{id}")
  static createXu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
