import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggl")
export default class GglController {
  @operation({
    summary: "Get Ggl",
  })
  @get()
  static getGgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggl",
  })
  @post("{id}")
  static createGgl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
