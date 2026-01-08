import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gnb")
export default class GnbController {
  @operation({
    summary: "Get Gnb",
  })
  @get()
  static getGnb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnb",
  })
  @post("{id}")
  static createGnb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
