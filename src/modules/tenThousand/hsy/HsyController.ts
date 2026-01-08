import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsy")
export default class HsyController {
  @operation({
    summary: "Get Hsy",
  })
  @get()
  static getHsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsy",
  })
  @post("{id}")
  static createHsy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
