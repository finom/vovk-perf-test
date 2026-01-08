import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vq")
export default class VqController {
  @operation({
    summary: "Get Vq",
  })
  @get()
  static getVq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vq",
  })
  @post("{id}")
  static createVq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
