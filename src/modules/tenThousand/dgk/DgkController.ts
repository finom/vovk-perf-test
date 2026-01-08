import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgk")
export default class DgkController {
  @operation({
    summary: "Get Dgk",
  })
  @get()
  static getDgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgk",
  })
  @post("{id}")
  static createDgk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
