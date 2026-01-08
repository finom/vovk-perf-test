import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kag")
export default class KagController {
  @operation({
    summary: "Get Kag",
  })
  @get()
  static getKag = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kag",
  })
  @post("{id}")
  static createKag = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
