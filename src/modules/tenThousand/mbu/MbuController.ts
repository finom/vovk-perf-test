import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbu")
export default class MbuController {
  @operation({
    summary: "Get Mbu",
  })
  @get()
  static getMbu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbu",
  })
  @post("{id}")
  static createMbu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
