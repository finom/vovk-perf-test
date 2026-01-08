import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezz")
export default class EzzController {
  @operation({
    summary: "Get Ezz",
  })
  @get()
  static getEzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezz",
  })
  @post("{id}")
  static createEzz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
