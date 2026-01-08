import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kiw")
export default class KiwController {
  @operation({
    summary: "Get Kiw",
  })
  @get()
  static getKiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kiw",
  })
  @post("{id}")
  static createKiw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
