import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edg")
export default class EdgController {
  @operation({
    summary: "Get Edg",
  })
  @get()
  static getEdg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edg",
  })
  @post("{id}")
  static createEdg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
