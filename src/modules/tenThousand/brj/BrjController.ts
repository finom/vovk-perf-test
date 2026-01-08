import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("brj")
export default class BrjController {
  @operation({
    summary: "Get Brj",
  })
  @get()
  static getBrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brj",
  })
  @post("{id}")
  static createBrj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
