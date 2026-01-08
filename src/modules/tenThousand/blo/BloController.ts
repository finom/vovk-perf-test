import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("blo")
export default class BloController {
  @operation({
    summary: "Get Blo",
  })
  @get()
  static getBlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blo",
  })
  @post("{id}")
  static createBlo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
