import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqh")
export default class CqhController {
  @operation({
    summary: "Get Cqh",
  })
  @get()
  static getCqh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqh",
  })
  @post("{id}")
  static createCqh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
