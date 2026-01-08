import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hy")
export default class HyController {
  @operation({
    summary: "Get Hy",
  })
  @get()
  static getHy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hy",
  })
  @post("{id}")
  static createHy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
