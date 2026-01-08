import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bj")
export default class BjController {
  @operation({
    summary: "Get Bj",
  })
  @get()
  static getBj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bj",
  })
  @post("{id}")
  static createBj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
