import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azi")
export default class AziController {
  @operation({
    summary: "Get Azi",
  })
  @get()
  static getAzi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azi",
  })
  @post("{id}")
  static createAzi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
