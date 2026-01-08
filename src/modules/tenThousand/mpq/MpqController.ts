import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpq")
export default class MpqController {
  @operation({
    summary: "Get Mpq",
  })
  @get()
  static getMpq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpq",
  })
  @post("{id}")
  static createMpq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
