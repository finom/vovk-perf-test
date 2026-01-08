import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqk")
export default class FqkController {
  @operation({
    summary: "Get Fqk",
  })
  @get()
  static getFqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqk",
  })
  @post("{id}")
  static createFqk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
