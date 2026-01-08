import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqu")
export default class IquController {
  @operation({
    summary: "Get Iqu",
  })
  @get()
  static getIqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqu",
  })
  @post("{id}")
  static createIqu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
