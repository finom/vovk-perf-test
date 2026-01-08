import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ew")
export default class EwController {
  @operation({
    summary: "Get Ew",
  })
  @get()
  static getEw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ew",
  })
  @post("{id}")
  static createEw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
