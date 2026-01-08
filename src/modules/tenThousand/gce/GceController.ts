import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gce")
export default class GceController {
  @operation({
    summary: "Get Gce",
  })
  @get()
  static getGce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gce",
  })
  @post("{id}")
  static createGce = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
