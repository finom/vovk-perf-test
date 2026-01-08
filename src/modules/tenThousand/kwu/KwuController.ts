import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwu")
export default class KwuController {
  @operation({
    summary: "Get Kwu",
  })
  @get()
  static getKwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwu",
  })
  @post("{id}")
  static createKwu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
