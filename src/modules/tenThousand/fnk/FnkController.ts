import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fnk")
export default class FnkController {
  @operation({
    summary: "Get Fnk",
  })
  @get()
  static getFnk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnk",
  })
  @post("{id}")
  static createFnk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
