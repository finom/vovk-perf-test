import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cij")
export default class CijController {
  @operation({
    summary: "Get Cij",
  })
  @get()
  static getCij = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cij",
  })
  @post("{id}")
  static createCij = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
