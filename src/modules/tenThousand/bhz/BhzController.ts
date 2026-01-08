import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhz")
export default class BhzController {
  @operation({
    summary: "Get Bhz",
  })
  @get()
  static getBhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhz",
  })
  @post("{id}")
  static createBhz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
