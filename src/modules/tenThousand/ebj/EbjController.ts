import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebj")
export default class EbjController {
  @operation({
    summary: "Get Ebj",
  })
  @get()
  static getEbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebj",
  })
  @post("{id}")
  static createEbj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
