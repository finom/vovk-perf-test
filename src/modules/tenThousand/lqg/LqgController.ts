import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqg")
export default class LqgController {
  @operation({
    summary: "Get Lqg",
  })
  @get()
  static getLqg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqg",
  })
  @post("{id}")
  static createLqg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
