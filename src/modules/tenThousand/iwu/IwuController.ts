import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwu")
export default class IwuController {
  @operation({
    summary: "Get Iwu",
  })
  @get()
  static getIwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwu",
  })
  @post("{id}")
  static createIwu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
