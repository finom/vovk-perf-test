import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfi")
export default class KfiController {
  @operation({
    summary: "Get Kfi",
  })
  @get()
  static getKfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfi",
  })
  @post("{id}")
  static createKfi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
