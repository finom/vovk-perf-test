import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kue")
export default class KueController {
  @operation({
    summary: "Get Kue",
  })
  @get()
  static getKue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kue",
  })
  @post("{id}")
  static createKue = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
