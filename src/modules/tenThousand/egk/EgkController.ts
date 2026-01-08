import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egk")
export default class EgkController {
  @operation({
    summary: "Get Egk",
  })
  @get()
  static getEgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egk",
  })
  @post("{id}")
  static createEgk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
