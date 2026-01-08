import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ede")
export default class EdeController {
  @operation({
    summary: "Get Ede",
  })
  @get()
  static getEde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ede",
  })
  @post("{id}")
  static createEde = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
