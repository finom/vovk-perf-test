import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifk")
export default class IfkController {
  @operation({
    summary: "Get Ifk",
  })
  @get()
  static getIfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifk",
  })
  @post("{id}")
  static createIfk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
