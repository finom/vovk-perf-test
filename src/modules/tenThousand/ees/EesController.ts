import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ees")
export default class EesController {
  @operation({
    summary: "Get Ees",
  })
  @get()
  static getEes = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ees",
  })
  @post("{id}")
  static createEes = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
