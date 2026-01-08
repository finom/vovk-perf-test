import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myc")
export default class MycController {
  @operation({
    summary: "Get Myc",
  })
  @get()
  static getMyc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myc",
  })
  @post("{id}")
  static createMyc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
