import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("sr")
export default class SrController {
  @operation({
    summary: "Get Sr",
  })
  @get()
  static getSr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sr",
  })
  @post("{id}")
  static createSr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
