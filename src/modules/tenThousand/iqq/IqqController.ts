import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqq")
export default class IqqController {
  @operation({
    summary: "Get Iqq",
  })
  @get()
  static getIqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqq",
  })
  @post("{id}")
  static createIqq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
