import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iuj")
export default class IujController {
  @operation({
    summary: "Get Iuj",
  })
  @get()
  static getIuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iuj",
  })
  @post("{id}")
  static createIuj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
