import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ham")
export default class HamController {
  @operation({
    summary: "Get Ham",
  })
  @get()
  static getHam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ham",
  })
  @post("{id}")
  static createHam = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
