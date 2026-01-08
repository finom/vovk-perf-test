import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msl")
export default class MslController {
  @operation({
    summary: "Get Msl",
  })
  @get()
  static getMsl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msl",
  })
  @post("{id}")
  static createMsl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
