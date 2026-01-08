import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aev")
export default class AevController {
  @operation({
    summary: "Get Aev",
  })
  @get()
  static getAev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aev",
  })
  @post("{id}")
  static createAev = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
