import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfl")
export default class KflController {
  @operation({
    summary: "Get Kfl",
  })
  @get()
  static getKfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfl",
  })
  @post("{id}")
  static createKfl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
