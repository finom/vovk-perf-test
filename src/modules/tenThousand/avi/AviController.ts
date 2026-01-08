import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avi")
export default class AviController {
  @operation({
    summary: "Get Avi",
  })
  @get()
  static getAvi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avi",
  })
  @post("{id}")
  static createAvi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
