import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsd")
export default class GsdController {
  @operation({
    summary: "Get Gsd",
  })
  @get()
  static getGsd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsd",
  })
  @post("{id}")
  static createGsd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
