import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mff")
export default class MffController {
  @operation({
    summary: "Get Mff",
  })
  @get()
  static getMff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mff",
  })
  @post("{id}")
  static createMff = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
