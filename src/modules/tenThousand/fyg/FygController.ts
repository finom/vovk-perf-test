import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyg")
export default class FygController {
  @operation({
    summary: "Get Fyg",
  })
  @get()
  static getFyg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyg",
  })
  @post("{id}")
  static createFyg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
