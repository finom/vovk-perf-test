import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kww")
export default class KwwController {
  @operation({
    summary: "Get Kww",
  })
  @get()
  static getKww = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kww",
  })
  @post("{id}")
  static createKww = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
