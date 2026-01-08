import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dh")
export default class DhController {
  @operation({
    summary: "Get Dh",
  })
  @get()
  static getDh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dh",
  })
  @post("{id}")
  static createDh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
