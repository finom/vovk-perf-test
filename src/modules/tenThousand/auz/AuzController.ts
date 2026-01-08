import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("auz")
export default class AuzController {
  @operation({
    summary: "Get Auz",
  })
  @get()
  static getAuz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Auz",
  })
  @post("{id}")
  static createAuz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
