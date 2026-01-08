import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwr")
export default class BwrController {
  @operation({
    summary: "Get Bwr",
  })
  @get()
  static getBwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwr",
  })
  @post("{id}")
  static createBwr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
