import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpt")
export default class KptController {
  @operation({
    summary: "Get Kpt",
  })
  @get()
  static getKpt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpt",
  })
  @post("{id}")
  static createKpt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
