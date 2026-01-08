import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iei")
export default class IeiController {
  @operation({
    summary: "Get Iei",
  })
  @get()
  static getIei = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iei",
  })
  @post("{id}")
  static createIei = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
