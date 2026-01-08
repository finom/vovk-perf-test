import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("noz")
export default class NozController {
  @operation({
    summary: "Get Noz",
  })
  @get()
  static getNoz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Noz",
  })
  @post("{id}")
  static createNoz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
