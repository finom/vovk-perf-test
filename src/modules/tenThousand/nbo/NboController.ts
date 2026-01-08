import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbo")
export default class NboController {
  @operation({
    summary: "Get Nbo",
  })
  @get()
  static getNbo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbo",
  })
  @post("{id}")
  static createNbo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
