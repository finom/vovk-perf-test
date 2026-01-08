import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahp")
export default class AhpController {
  @operation({
    summary: "Get Ahp",
  })
  @get()
  static getAhp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahp",
  })
  @post("{id}")
  static createAhp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
