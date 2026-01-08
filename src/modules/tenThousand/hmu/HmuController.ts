import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmu")
export default class HmuController {
  @operation({
    summary: "Get Hmu",
  })
  @get()
  static getHmu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmu",
  })
  @post("{id}")
  static createHmu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
