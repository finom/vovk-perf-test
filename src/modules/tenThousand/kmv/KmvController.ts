import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmv")
export default class KmvController {
  @operation({
    summary: "Get Kmv",
  })
  @get()
  static getKmv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmv",
  })
  @post("{id}")
  static createKmv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
