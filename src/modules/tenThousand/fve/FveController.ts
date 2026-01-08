import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fve")
export default class FveController {
  @operation({
    summary: "Get Fve",
  })
  @get()
  static getFve = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fve",
  })
  @post("{id}")
  static createFve = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
