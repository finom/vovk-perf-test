import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("heg")
export default class HegController {
  @operation({
    summary: "Get Heg",
  })
  @get()
  static getHeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Heg",
  })
  @post("{id}")
  static createHeg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
