import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbr")
export default class HbrController {
  @operation({
    summary: "Get Hbr",
  })
  @get()
  static getHbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbr",
  })
  @post("{id}")
  static createHbr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
