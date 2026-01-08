import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpk")
export default class GpkController {
  @operation({
    summary: "Get Gpk",
  })
  @get()
  static getGpk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpk",
  })
  @post("{id}")
  static createGpk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
