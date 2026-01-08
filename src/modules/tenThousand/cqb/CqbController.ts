import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqb")
export default class CqbController {
  @operation({
    summary: "Get Cqb",
  })
  @get()
  static getCqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqb",
  })
  @post("{id}")
  static createCqb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
