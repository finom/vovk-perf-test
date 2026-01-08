import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avs")
export default class AvsController {
  @operation({
    summary: "Get Avs",
  })
  @get()
  static getAvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avs",
  })
  @post("{id}")
  static createAvs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
