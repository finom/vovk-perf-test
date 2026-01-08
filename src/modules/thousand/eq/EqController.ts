import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eq")
export default class EqController {
  @operation({
    summary: "Get Eq",
  })
  @get()
  static getEq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eq",
  })
  @post("{id}")
  static createEq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
