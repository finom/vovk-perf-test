import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msc")
export default class MscController {
  @operation({
    summary: "Get Msc",
  })
  @get()
  static getMsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msc",
  })
  @post("{id}")
  static createMsc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
