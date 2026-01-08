import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ats")
export default class AtsController {
  @operation({
    summary: "Get Ats",
  })
  @get()
  static getAts = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ats",
  })
  @post("{id}")
  static createAts = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
