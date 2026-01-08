import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ang")
export default class AngController {
  @operation({
    summary: "Get Ang",
  })
  @get()
  static getAng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ang",
  })
  @post("{id}")
  static createAng = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
