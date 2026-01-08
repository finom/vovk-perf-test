import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("grq")
export default class GrqController {
  @operation({
    summary: "Get Grq",
  })
  @get()
  static getGrq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grq",
  })
  @post("{id}")
  static createGrq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
