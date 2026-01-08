import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsm")
export default class GsmController {
  @operation({
    summary: "Get Gsm",
  })
  @get()
  static getGsm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsm",
  })
  @post("{id}")
  static createGsm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
