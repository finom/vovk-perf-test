import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezm")
export default class EzmController {
  @operation({
    summary: "Get Ezm",
  })
  @get()
  static getEzm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezm",
  })
  @post("{id}")
  static createEzm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
