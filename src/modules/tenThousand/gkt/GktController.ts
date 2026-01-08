import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gkt")
export default class GktController {
  @operation({
    summary: "Get Gkt",
  })
  @get()
  static getGkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkt",
  })
  @post("{id}")
  static createGkt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
