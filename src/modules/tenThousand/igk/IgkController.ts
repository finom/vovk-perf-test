import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igk")
export default class IgkController {
  @operation({
    summary: "Get Igk",
  })
  @get()
  static getIgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igk",
  })
  @post("{id}")
  static createIgk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
