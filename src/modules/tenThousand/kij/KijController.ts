import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kij")
export default class KijController {
  @operation({
    summary: "Get Kij",
  })
  @get()
  static getKij = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kij",
  })
  @post("{id}")
  static createKij = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
