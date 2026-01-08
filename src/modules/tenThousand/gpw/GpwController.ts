import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpw")
export default class GpwController {
  @operation({
    summary: "Get Gpw",
  })
  @get()
  static getGpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpw",
  })
  @post("{id}")
  static createGpw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
