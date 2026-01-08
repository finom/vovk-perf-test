import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exr")
export default class ExrController {
  @operation({
    summary: "Get Exr",
  })
  @get()
  static getExr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exr",
  })
  @post("{id}")
  static createExr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
