import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("htj")
export default class HtjController {
  @operation({
    summary: "Get Htj",
  })
  @get()
  static getHtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htj",
  })
  @post("{id}")
  static createHtj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
