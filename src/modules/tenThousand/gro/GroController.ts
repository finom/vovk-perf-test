import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gro")
export default class GroController {
  @operation({
    summary: "Get Gro",
  })
  @get()
  static getGro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gro",
  })
  @post("{id}")
  static createGro = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
