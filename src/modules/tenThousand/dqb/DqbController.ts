import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqb")
export default class DqbController {
  @operation({
    summary: "Get Dqb",
  })
  @get()
  static getDqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqb",
  })
  @post("{id}")
  static createDqb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
