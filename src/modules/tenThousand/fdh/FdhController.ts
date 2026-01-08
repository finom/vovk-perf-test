import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdh")
export default class FdhController {
  @operation({
    summary: "Get Fdh",
  })
  @get()
  static getFdh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdh",
  })
  @post("{id}")
  static createFdh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
