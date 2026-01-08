import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwk")
export default class IwkController {
  @operation({
    summary: "Get Iwk",
  })
  @get()
  static getIwk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwk",
  })
  @post("{id}")
  static createIwk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
