import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfl")
export default class HflController {
  @operation({
    summary: "Get Hfl",
  })
  @get()
  static getHfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfl",
  })
  @post("{id}")
  static createHfl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
