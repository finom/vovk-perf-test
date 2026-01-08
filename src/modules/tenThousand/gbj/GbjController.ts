import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbj")
export default class GbjController {
  @operation({
    summary: "Get Gbj",
  })
  @get()
  static getGbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbj",
  })
  @post("{id}")
  static createGbj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
