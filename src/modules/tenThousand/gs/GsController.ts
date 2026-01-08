import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gs")
export default class GsController {
  @operation({
    summary: "Get Gs",
  })
  @get()
  static getGs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gs",
  })
  @post("{id}")
  static createGs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
