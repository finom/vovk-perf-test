import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgh")
export default class HghController {
  @operation({
    summary: "Get Hgh",
  })
  @get()
  static getHgh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgh",
  })
  @post("{id}")
  static createHgh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
