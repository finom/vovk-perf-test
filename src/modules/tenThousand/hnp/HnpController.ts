import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hnp")
export default class HnpController {
  @operation({
    summary: "Get Hnp",
  })
  @get()
  static getHnp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnp",
  })
  @post("{id}")
  static createHnp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
