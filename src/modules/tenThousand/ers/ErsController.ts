import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ers")
export default class ErsController {
  @operation({
    summary: "Get Ers",
  })
  @get()
  static getErs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ers",
  })
  @post("{id}")
  static createErs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
