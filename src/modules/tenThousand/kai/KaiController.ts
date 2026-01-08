import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kai")
export default class KaiController {
  @operation({
    summary: "Get Kai",
  })
  @get()
  static getKai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kai",
  })
  @post("{id}")
  static createKai = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
