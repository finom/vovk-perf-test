import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfd")
export default class LfdController {
  @operation({
    summary: "Get Lfd",
  })
  @get()
  static getLfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfd",
  })
  @post("{id}")
  static createLfd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
