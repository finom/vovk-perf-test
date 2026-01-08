import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqb")
export default class HqbController {
  @operation({
    summary: "Get Hqb",
  })
  @get()
  static getHqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqb",
  })
  @post("{id}")
  static createHqb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
