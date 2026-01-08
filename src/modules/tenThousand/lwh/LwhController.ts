import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwh")
export default class LwhController {
  @operation({
    summary: "Get Lwh",
  })
  @get()
  static getLwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwh",
  })
  @post("{id}")
  static createLwh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
