import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iv")
export default class IvController {
  @operation({
    summary: "Get Iv",
  })
  @get()
  static getIv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iv",
  })
  @post("{id}")
  static createIv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
