import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kng")
export default class KngController {
  @operation({
    summary: "Get Kng",
  })
  @get()
  static getKng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kng",
  })
  @post("{id}")
  static createKng = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
