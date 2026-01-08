import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzo")
export default class LzoController {
  @operation({
    summary: "Get Lzo",
  })
  @get()
  static getLzo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzo",
  })
  @post("{id}")
  static createLzo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
