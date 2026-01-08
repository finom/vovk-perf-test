import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("her")
export default class HerController {
  @operation({
    summary: "Get Her",
  })
  @get()
  static getHer = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Her",
  })
  @post("{id}")
  static createHer = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
