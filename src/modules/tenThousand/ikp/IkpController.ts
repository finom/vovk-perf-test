import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ikp")
export default class IkpController {
  @operation({
    summary: "Get Ikp",
  })
  @get()
  static getIkp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikp",
  })
  @post("{id}")
  static createIkp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
