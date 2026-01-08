import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lby")
export default class LbyController {
  @operation({
    summary: "Get Lby",
  })
  @get()
  static getLby = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lby",
  })
  @post("{id}")
  static createLby = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
