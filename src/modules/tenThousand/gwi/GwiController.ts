import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwi")
export default class GwiController {
  @operation({
    summary: "Get Gwi",
  })
  @get()
  static getGwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwi",
  })
  @post("{id}")
  static createGwi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
