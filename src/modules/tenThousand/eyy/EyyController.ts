import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyy")
export default class EyyController {
  @operation({
    summary: "Get Eyy",
  })
  @get()
  static getEyy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyy",
  })
  @post("{id}")
  static createEyy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
