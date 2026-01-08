import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsk")
export default class BskController {
  @operation({
    summary: "Get Bsk",
  })
  @get()
  static getBsk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsk",
  })
  @post("{id}")
  static createBsk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
