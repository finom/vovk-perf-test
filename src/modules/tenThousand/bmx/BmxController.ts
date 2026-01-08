import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmx")
export default class BmxController {
  @operation({
    summary: "Get Bmx",
  })
  @get()
  static getBmx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmx",
  })
  @post("{id}")
  static createBmx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
