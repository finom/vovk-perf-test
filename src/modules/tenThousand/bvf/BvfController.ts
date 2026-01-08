import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvf")
export default class BvfController {
  @operation({
    summary: "Get Bvf",
  })
  @get()
  static getBvf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvf",
  })
  @post("{id}")
  static createBvf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
