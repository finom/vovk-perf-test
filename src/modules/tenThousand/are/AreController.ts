import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("are")
export default class AreController {
  @operation({
    summary: "Get Are",
  })
  @get()
  static getAre = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Are",
  })
  @post("{id}")
  static createAre = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
