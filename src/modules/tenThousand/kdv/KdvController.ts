import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdv")
export default class KdvController {
  @operation({
    summary: "Get Kdv",
  })
  @get()
  static getKdv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdv",
  })
  @post("{id}")
  static createKdv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
