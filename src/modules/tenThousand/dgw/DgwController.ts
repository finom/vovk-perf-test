import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgw")
export default class DgwController {
  @operation({
    summary: "Get Dgw",
  })
  @get()
  static getDgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgw",
  })
  @post("{id}")
  static createDgw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
