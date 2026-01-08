import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lal")
export default class LalController {
  @operation({
    summary: "Get Lal",
  })
  @get()
  static getLal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lal",
  })
  @post("{id}")
  static createLal = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
