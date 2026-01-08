import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eww")
export default class EwwController {
  @operation({
    summary: "Get Eww",
  })
  @get()
  static getEww = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eww",
  })
  @post("{id}")
  static createEww = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
