import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kkr")
export default class KkrController {
  @operation({
    summary: "Get Kkr",
  })
  @get()
  static getKkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkr",
  })
  @post("{id}")
  static createKkr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
