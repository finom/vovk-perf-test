import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("clw")
export default class ClwController {
  @operation({
    summary: "Get Clw",
  })
  @get()
  static getClw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clw",
  })
  @post("{id}")
  static createClw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
