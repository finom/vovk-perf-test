import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsu")
export default class HsuController {
  @operation({
    summary: "Get Hsu",
  })
  @get()
  static getHsu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsu",
  })
  @post("{id}")
  static createHsu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
