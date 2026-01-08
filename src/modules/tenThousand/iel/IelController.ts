import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iel")
export default class IelController {
  @operation({
    summary: "Get Iel",
  })
  @get()
  static getIel = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iel",
  })
  @post("{id}")
  static createIel = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
