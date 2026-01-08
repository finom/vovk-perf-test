import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxy")
export default class KxyController {
  @operation({
    summary: "Get Kxy",
  })
  @get()
  static getKxy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxy",
  })
  @post("{id}")
  static createKxy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
