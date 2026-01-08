import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibs")
export default class IbsController {
  @operation({
    summary: "Get Ibs",
  })
  @get()
  static getIbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibs",
  })
  @post("{id}")
  static createIbs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
