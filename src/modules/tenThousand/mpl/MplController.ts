import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpl")
export default class MplController {
  @operation({
    summary: "Get Mpl",
  })
  @get()
  static getMpl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpl",
  })
  @post("{id}")
  static createMpl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
