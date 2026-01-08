import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eak")
export default class EakController {
  @operation({
    summary: "Get Eak",
  })
  @get()
  static getEak = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eak",
  })
  @post("{id}")
  static createEak = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
