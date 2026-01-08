import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhb")
export default class BhbController {
  @operation({
    summary: "Get Bhb",
  })
  @get()
  static getBhb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhb",
  })
  @post("{id}")
  static createBhb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
