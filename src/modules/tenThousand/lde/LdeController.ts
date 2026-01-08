import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lde")
export default class LdeController {
  @operation({
    summary: "Get Lde",
  })
  @get()
  static getLde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lde",
  })
  @post("{id}")
  static createLde = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
