import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hu")
export default class HuController {
  @operation({
    summary: "Get Hu",
  })
  @get()
  static getHu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hu",
  })
  @post("{id}")
  static createHu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
