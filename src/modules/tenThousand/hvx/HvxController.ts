import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvx")
export default class HvxController {
  @operation({
    summary: "Get Hvx",
  })
  @get()
  static getHvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvx",
  })
  @post("{id}")
  static createHvx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
