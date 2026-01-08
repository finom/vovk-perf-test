import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eks")
export default class EksController {
  @operation({
    summary: "Get Eks",
  })
  @get()
  static getEks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eks",
  })
  @post("{id}")
  static createEks = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
