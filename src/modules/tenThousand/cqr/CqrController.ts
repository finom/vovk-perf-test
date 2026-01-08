import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqr")
export default class CqrController {
  @operation({
    summary: "Get Cqr",
  })
  @get()
  static getCqr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqr",
  })
  @post("{id}")
  static createCqr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
