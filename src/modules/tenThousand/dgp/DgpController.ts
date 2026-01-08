import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgp")
export default class DgpController {
  @operation({
    summary: "Get Dgp",
  })
  @get()
  static getDgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgp",
  })
  @post("{id}")
  static createDgp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
