import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyv")
export default class IyvController {
  @operation({
    summary: "Get Iyv",
  })
  @get()
  static getIyv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyv",
  })
  @post("{id}")
  static createIyv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
