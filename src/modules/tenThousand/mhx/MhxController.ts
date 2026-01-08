import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhx")
export default class MhxController {
  @operation({
    summary: "Get Mhx",
  })
  @get()
  static getMhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhx",
  })
  @post("{id}")
  static createMhx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
