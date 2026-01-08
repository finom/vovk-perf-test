import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqj")
export default class DqjController {
  @operation({
    summary: "Get Dqj",
  })
  @get()
  static getDqj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqj",
  })
  @post("{id}")
  static createDqj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
