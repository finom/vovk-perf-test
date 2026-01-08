import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgs")
export default class BgsController {
  @operation({
    summary: "Get Bgs",
  })
  @get()
  static getBgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgs",
  })
  @post("{id}")
  static createBgs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
