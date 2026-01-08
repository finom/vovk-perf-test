import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iew")
export default class IewController {
  @operation({
    summary: "Get Iew",
  })
  @get()
  static getIew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iew",
  })
  @post("{id}")
  static createIew = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
