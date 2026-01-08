import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmb")
export default class KmbController {
  @operation({
    summary: "Get Kmb",
  })
  @get()
  static getKmb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmb",
  })
  @post("{id}")
  static createKmb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
