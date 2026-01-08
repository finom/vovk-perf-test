import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsy")
export default class DsyController {
  @operation({
    summary: "Get Dsy",
  })
  @get()
  static getDsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsy",
  })
  @post("{id}")
  static createDsy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
