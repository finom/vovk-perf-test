import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aky")
export default class AkyController {
  @operation({
    summary: "Get Aky",
  })
  @get()
  static getAky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aky",
  })
  @post("{id}")
  static createAky = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
