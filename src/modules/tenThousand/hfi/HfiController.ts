import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfi")
export default class HfiController {
  @operation({
    summary: "Get Hfi",
  })
  @get()
  static getHfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfi",
  })
  @post("{id}")
  static createHfi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
