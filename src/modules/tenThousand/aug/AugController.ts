import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aug")
export default class AugController {
  @operation({
    summary: "Get Aug",
  })
  @get()
  static getAug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aug",
  })
  @post("{id}")
  static createAug = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
