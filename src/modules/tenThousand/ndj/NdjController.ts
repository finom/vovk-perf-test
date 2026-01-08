import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndj")
export default class NdjController {
  @operation({
    summary: "Get Ndj",
  })
  @get()
  static getNdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndj",
  })
  @post("{id}")
  static createNdj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
