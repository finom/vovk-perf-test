import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdb")
export default class MdbController {
  @operation({
    summary: "Get Mdb",
  })
  @get()
  static getMdb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdb",
  })
  @post("{id}")
  static createMdb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
