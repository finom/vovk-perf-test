import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpy")
export default class KpyController {
  @operation({
    summary: "Get Kpy",
  })
  @get()
  static getKpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpy",
  })
  @post("{id}")
  static createKpy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
