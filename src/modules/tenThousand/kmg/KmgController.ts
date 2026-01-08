import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmg")
export default class KmgController {
  @operation({
    summary: "Get Kmg",
  })
  @get()
  static getKmg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmg",
  })
  @post("{id}")
  static createKmg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
