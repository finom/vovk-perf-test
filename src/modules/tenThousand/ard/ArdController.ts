import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ard")
export default class ArdController {
  @operation({
    summary: "Get Ard",
  })
  @get()
  static getArd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ard",
  })
  @post("{id}")
  static createArd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
