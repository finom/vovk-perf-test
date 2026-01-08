import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yr")
export default class YrController {
  @operation({
    summary: "Get Yr",
  })
  @get()
  static getYr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yr",
  })
  @post("{id}")
  static createYr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
