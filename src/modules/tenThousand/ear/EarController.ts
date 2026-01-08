import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ear")
export default class EarController {
  @operation({
    summary: "Get Ear",
  })
  @get()
  static getEar = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ear",
  })
  @post("{id}")
  static createEar = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
