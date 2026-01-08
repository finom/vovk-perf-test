import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngk")
export default class NgkController {
  @operation({
    summary: "Get Ngk",
  })
  @get()
  static getNgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngk",
  })
  @post("{id}")
  static createNgk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
