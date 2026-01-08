import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqj")
export default class HqjController {
  @operation({
    summary: "Get Hqj",
  })
  @get()
  static getHqj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqj",
  })
  @post("{id}")
  static createHqj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
