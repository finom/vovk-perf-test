import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpx")
export default class KpxController {
  @operation({
    summary: "Get Kpx",
  })
  @get()
  static getKpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpx",
  })
  @post("{id}")
  static createKpx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
