import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwk")
export default class GwkController {
  @operation({
    summary: "Get Gwk",
  })
  @get()
  static getGwk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwk",
  })
  @post("{id}")
  static createGwk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
