import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("flk")
export default class FlkController {
  @operation({
    summary: "Get Flk",
  })
  @get()
  static getFlk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flk",
  })
  @post("{id}")
  static createFlk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
