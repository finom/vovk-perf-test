import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kon")
export default class KonController {
  @operation({
    summary: "Get Kon",
  })
  @get()
  static getKon = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kon",
  })
  @post("{id}")
  static createKon = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
