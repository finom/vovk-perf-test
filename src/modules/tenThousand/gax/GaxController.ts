import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gax")
export default class GaxController {
  @operation({
    summary: "Get Gax",
  })
  @get()
  static getGax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gax",
  })
  @post("{id}")
  static createGax = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
