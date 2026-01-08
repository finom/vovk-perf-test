import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gnd")
export default class GndController {
  @operation({
    summary: "Get Gnd",
  })
  @get()
  static getGnd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnd",
  })
  @post("{id}")
  static createGnd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
