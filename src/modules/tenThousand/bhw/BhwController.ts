import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhw")
export default class BhwController {
  @operation({
    summary: "Get Bhw",
  })
  @get()
  static getBhw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhw",
  })
  @post("{id}")
  static createBhw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
