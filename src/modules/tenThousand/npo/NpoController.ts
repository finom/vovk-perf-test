import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npo")
export default class NpoController {
  @operation({
    summary: "Get Npo",
  })
  @get()
  static getNpo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npo",
  })
  @post("{id}")
  static createNpo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
