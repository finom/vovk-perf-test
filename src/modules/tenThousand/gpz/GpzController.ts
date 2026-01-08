import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpz")
export default class GpzController {
  @operation({
    summary: "Get Gpz",
  })
  @get()
  static getGpz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpz",
  })
  @post("{id}")
  static createGpz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
