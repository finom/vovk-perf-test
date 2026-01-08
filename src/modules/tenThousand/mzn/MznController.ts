import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzn")
export default class MznController {
  @operation({
    summary: "Get Mzn",
  })
  @get()
  static getMzn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzn",
  })
  @post("{id}")
  static createMzn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
