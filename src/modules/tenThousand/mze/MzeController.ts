import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mze")
export default class MzeController {
  @operation({
    summary: "Get Mze",
  })
  @get()
  static getMze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mze",
  })
  @post("{id}")
  static createMze = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
