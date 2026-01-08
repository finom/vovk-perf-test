import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpa")
export default class FpaController {
  @operation({
    summary: "Get Fpa",
  })
  @get()
  static getFpa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpa",
  })
  @post("{id}")
  static createFpa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
