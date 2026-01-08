import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aid")
export default class AidController {
  @operation({
    summary: "Get Aid",
  })
  @get()
  static getAid = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aid",
  })
  @post("{id}")
  static createAid = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
