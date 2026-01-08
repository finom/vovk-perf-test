import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjo")
export default class KjoController {
  @operation({
    summary: "Get Kjo",
  })
  @get()
  static getKjo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjo",
  })
  @post("{id}")
  static createKjo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
