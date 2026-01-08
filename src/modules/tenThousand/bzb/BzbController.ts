import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzb")
export default class BzbController {
  @operation({
    summary: "Get Bzb",
  })
  @get()
  static getBzb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzb",
  })
  @post("{id}")
  static createBzb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
