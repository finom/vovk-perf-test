import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xi")
export default class XiController {
  @operation({
    summary: "Get Xi",
  })
  @get()
  static getXi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xi",
  })
  @post("{id}")
  static createXi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
