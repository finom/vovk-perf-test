import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhh")
export default class HhhController {
  @operation({
    summary: "Get Hhh",
  })
  @get()
  static getHhh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhh",
  })
  @post("{id}")
  static createHhh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
