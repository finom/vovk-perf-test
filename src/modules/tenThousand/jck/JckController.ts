import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jck")
export default class JckController {
  @operation({
    summary: "Get Jck",
  })
  @get()
  static getJck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jck",
  })
  @post("{id}")
  static createJck = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
