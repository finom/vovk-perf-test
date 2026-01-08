import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ive")
export default class IveController {
  @operation({
    summary: "Get Ive",
  })
  @get()
  static getIve = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ive",
  })
  @post("{id}")
  static createIve = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
