import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aet")
export default class AetController {
  @operation({
    summary: "Get Aet",
  })
  @get()
  static getAet = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aet",
  })
  @post("{id}")
  static createAet = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
