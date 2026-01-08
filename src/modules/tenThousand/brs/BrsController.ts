import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("brs")
export default class BrsController {
  @operation({
    summary: "Get Brs",
  })
  @get()
  static getBrs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brs",
  })
  @post("{id}")
  static createBrs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
