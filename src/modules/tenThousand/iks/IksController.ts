import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iks")
export default class IksController {
  @operation({
    summary: "Get Iks",
  })
  @get()
  static getIks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iks",
  })
  @post("{id}")
  static createIks = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
