import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hee")
export default class HeeController {
  @operation({
    summary: "Get Hee",
  })
  @get()
  static getHee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hee",
  })
  @post("{id}")
  static createHee = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
