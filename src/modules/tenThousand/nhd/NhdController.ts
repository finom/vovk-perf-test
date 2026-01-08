import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhd")
export default class NhdController {
  @operation({
    summary: "Get Nhd",
  })
  @get()
  static getNhd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhd",
  })
  @post("{id}")
  static createNhd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
