import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("blh")
export default class BlhController {
  @operation({
    summary: "Get Blh",
  })
  @get()
  static getBlh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blh",
  })
  @post("{id}")
  static createBlh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
