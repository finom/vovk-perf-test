import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mio")
export default class MioController {
  @operation({
    summary: "Get Mio",
  })
  @get()
  static getMio = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mio",
  })
  @post("{id}")
  static createMio = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
