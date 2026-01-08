import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mym")
export default class MymController {
  @operation({
    summary: "Get Mym",
  })
  @get()
  static getMym = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mym",
  })
  @post("{id}")
  static createMym = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
