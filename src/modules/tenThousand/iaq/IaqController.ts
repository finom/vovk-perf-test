import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iaq")
export default class IaqController {
  @operation({
    summary: "Get Iaq",
  })
  @get()
  static getIaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iaq",
  })
  @post("{id}")
  static createIaq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
