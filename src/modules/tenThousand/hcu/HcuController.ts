import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hcu")
export default class HcuController {
  @operation({
    summary: "Get Hcu",
  })
  @get()
  static getHcu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcu",
  })
  @post("{id}")
  static createHcu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
