import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipt")
export default class IptController {
  @operation({
    summary: "Get Ipt",
  })
  @get()
  static getIpt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipt",
  })
  @post("{id}")
  static createIpt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
