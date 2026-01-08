import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmw")
export default class BmwController {
  @operation({
    summary: "Get Bmw",
  })
  @get()
  static getBmw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmw",
  })
  @post("{id}")
  static createBmw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
