import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avk")
export default class AvkController {
  @operation({
    summary: "Get Avk",
  })
  @get()
  static getAvk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avk",
  })
  @post("{id}")
  static createAvk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
