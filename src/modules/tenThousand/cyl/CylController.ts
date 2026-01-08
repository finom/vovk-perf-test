import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyl")
export default class CylController {
  @operation({
    summary: "Get Cyl",
  })
  @get()
  static getCyl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyl",
  })
  @post("{id}")
  static createCyl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
