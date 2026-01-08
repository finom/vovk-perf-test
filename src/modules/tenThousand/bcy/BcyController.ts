import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bcy")
export default class BcyController {
  @operation({
    summary: "Get Bcy",
  })
  @get()
  static getBcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcy",
  })
  @post("{id}")
  static createBcy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
