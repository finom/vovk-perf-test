import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyf")
export default class HyfController {
  @operation({
    summary: "Get Hyf",
  })
  @get()
  static getHyf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyf",
  })
  @post("{id}")
  static createHyf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
