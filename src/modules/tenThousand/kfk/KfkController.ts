import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfk")
export default class KfkController {
  @operation({
    summary: "Get Kfk",
  })
  @get()
  static getKfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfk",
  })
  @post("{id}")
  static createKfk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
