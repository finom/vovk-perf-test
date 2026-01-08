import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ikv")
export default class IkvController {
  @operation({
    summary: "Get Ikv",
  })
  @get()
  static getIkv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikv",
  })
  @post("{id}")
  static createIkv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
