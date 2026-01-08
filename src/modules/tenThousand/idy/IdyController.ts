import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idy")
export default class IdyController {
  @operation({
    summary: "Get Idy",
  })
  @get()
  static getIdy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idy",
  })
  @post("{id}")
  static createIdy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
