import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjk")
export default class KjkController {
  @operation({
    summary: "Get Kjk",
  })
  @get()
  static getKjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjk",
  })
  @post("{id}")
  static createKjk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
