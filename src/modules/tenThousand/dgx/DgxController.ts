import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgx")
export default class DgxController {
  @operation({
    summary: "Get Dgx",
  })
  @get()
  static getDgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgx",
  })
  @post("{id}")
  static createDgx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
