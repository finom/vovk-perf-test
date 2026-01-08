import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gib")
export default class GibController {
  @operation({
    summary: "Get Gib",
  })
  @get()
  static getGib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gib",
  })
  @post("{id}")
  static createGib = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
