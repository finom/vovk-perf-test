import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("euy")
export default class EuyController {
  @operation({
    summary: "Get Euy",
  })
  @get()
  static getEuy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Euy",
  })
  @post("{id}")
  static createEuy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
