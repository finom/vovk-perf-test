import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyv")
export default class DyvController {
  @operation({
    summary: "Get Dyv",
  })
  @get()
  static getDyv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyv",
  })
  @post("{id}")
  static createDyv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
