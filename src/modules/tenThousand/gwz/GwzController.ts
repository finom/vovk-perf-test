import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwz")
export default class GwzController {
  @operation({
    summary: "Get Gwz",
  })
  @get()
  static getGwz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwz",
  })
  @post("{id}")
  static createGwz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
