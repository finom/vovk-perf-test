import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eug")
export default class EugController {
  @operation({
    summary: "Get Eug",
  })
  @get()
  static getEug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eug",
  })
  @post("{id}")
  static createEug = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
