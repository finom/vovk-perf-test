import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwi")
export default class KwiController {
  @operation({
    summary: "Get Kwi",
  })
  @get()
  static getKwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwi",
  })
  @post("{id}")
  static createKwi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
