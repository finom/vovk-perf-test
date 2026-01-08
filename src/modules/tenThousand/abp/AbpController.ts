import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abp")
export default class AbpController {
  @operation({
    summary: "Get Abp",
  })
  @get()
  static getAbp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abp",
  })
  @post("{id}")
  static createAbp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
