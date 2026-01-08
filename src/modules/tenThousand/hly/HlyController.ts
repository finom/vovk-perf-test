import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hly")
export default class HlyController {
  @operation({
    summary: "Get Hly",
  })
  @get()
  static getHly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hly",
  })
  @post("{id}")
  static createHly = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
