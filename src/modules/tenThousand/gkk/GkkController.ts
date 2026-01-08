import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gkk")
export default class GkkController {
  @operation({
    summary: "Get Gkk",
  })
  @get()
  static getGkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkk",
  })
  @post("{id}")
  static createGkk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
