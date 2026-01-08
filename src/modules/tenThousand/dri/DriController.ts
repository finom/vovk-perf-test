import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dri")
export default class DriController {
  @operation({
    summary: "Get Dri",
  })
  @get()
  static getDri = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dri",
  })
  @post("{id}")
  static createDri = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
