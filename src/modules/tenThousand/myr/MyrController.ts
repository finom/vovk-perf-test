import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myr")
export default class MyrController {
  @operation({
    summary: "Get Myr",
  })
  @get()
  static getMyr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myr",
  })
  @post("{id}")
  static createMyr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
