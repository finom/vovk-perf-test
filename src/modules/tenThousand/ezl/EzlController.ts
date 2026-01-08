import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezl")
export default class EzlController {
  @operation({
    summary: "Get Ezl",
  })
  @get()
  static getEzl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezl",
  })
  @post("{id}")
  static createEzl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
