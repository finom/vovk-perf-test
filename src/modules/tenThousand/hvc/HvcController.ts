import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvc")
export default class HvcController {
  @operation({
    summary: "Get Hvc",
  })
  @get()
  static getHvc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvc",
  })
  @post("{id}")
  static createHvc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
