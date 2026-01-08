import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csu")
export default class CsuController {
  @operation({
    summary: "Get Csu",
  })
  @get()
  static getCsu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csu",
  })
  @post("{id}")
  static createCsu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
