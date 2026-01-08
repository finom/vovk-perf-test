import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvr")
export default class HvrController {
  @operation({
    summary: "Get Hvr",
  })
  @get()
  static getHvr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvr",
  })
  @post("{id}")
  static createHvr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
