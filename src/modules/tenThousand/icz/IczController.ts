import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("icz")
export default class IczController {
  @operation({
    summary: "Get Icz",
  })
  @get()
  static getIcz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icz",
  })
  @post("{id}")
  static createIcz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
