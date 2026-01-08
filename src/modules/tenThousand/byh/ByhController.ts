import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byh")
export default class ByhController {
  @operation({
    summary: "Get Byh",
  })
  @get()
  static getByh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byh",
  })
  @post("{id}")
  static createByh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
