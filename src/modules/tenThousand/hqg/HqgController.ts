import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqg")
export default class HqgController {
  @operation({
    summary: "Get Hqg",
  })
  @get()
  static getHqg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqg",
  })
  @post("{id}")
  static createHqg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
