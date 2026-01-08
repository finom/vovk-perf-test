import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzd")
export default class BzdController {
  @operation({
    summary: "Get Bzd",
  })
  @get()
  static getBzd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzd",
  })
  @post("{id}")
  static createBzd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
