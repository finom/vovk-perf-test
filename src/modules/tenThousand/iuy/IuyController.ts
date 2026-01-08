import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iuy")
export default class IuyController {
  @operation({
    summary: "Get Iuy",
  })
  @get()
  static getIuy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iuy",
  })
  @post("{id}")
  static createIuy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
