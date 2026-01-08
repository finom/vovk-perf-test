import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddh")
export default class DdhController {
  @operation({
    summary: "Get Ddh",
  })
  @get()
  static getDdh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddh",
  })
  @post("{id}")
  static createDdh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
