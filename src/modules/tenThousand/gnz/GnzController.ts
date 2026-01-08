import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gnz")
export default class GnzController {
  @operation({
    summary: "Get Gnz",
  })
  @get()
  static getGnz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnz",
  })
  @post("{id}")
  static createGnz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
