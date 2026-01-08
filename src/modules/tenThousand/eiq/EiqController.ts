import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eiq")
export default class EiqController {
  @operation({
    summary: "Get Eiq",
  })
  @get()
  static getEiq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eiq",
  })
  @post("{id}")
  static createEiq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
