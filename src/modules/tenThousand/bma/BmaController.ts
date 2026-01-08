import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bma")
export default class BmaController {
  @operation({
    summary: "Get Bma",
  })
  @get()
  static getBma = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bma",
  })
  @post("{id}")
  static createBma = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
