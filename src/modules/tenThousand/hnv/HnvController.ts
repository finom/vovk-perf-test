import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hnv")
export default class HnvController {
  @operation({
    summary: "Get Hnv",
  })
  @get()
  static getHnv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnv",
  })
  @post("{id}")
  static createHnv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
