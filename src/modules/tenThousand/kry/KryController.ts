import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kry")
export default class KryController {
  @operation({
    summary: "Get Kry",
  })
  @get()
  static getKry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kry",
  })
  @post("{id}")
  static createKry = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
