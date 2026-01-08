import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyv")
export default class FyvController {
  @operation({
    summary: "Get Fyv",
  })
  @get()
  static getFyv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyv",
  })
  @post("{id}")
  static createFyv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
