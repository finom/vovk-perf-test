import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdz")
export default class FdzController {
  @operation({
    summary: "Get Fdz",
  })
  @get()
  static getFdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdz",
  })
  @post("{id}")
  static createFdz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
