import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("grh")
export default class GrhController {
  @operation({
    summary: "Get Grh",
  })
  @get()
  static getGrh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grh",
  })
  @post("{id}")
  static createGrh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
