import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihc")
export default class IhcController {
  @operation({
    summary: "Get Ihc",
  })
  @get()
  static getIhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihc",
  })
  @post("{id}")
  static createIhc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
