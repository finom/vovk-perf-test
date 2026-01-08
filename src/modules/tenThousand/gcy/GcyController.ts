import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gcy")
export default class GcyController {
  @operation({
    summary: "Get Gcy",
  })
  @get()
  static getGcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcy",
  })
  @post("{id}")
  static createGcy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
