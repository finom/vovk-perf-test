import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqp")
export default class FqpController {
  @operation({
    summary: "Get Fqp",
  })
  @get()
  static getFqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqp",
  })
  @post("{id}")
  static createFqp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
