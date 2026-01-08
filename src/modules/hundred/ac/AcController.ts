import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ac")
export default class AcController {
  @operation({
    summary: "Get Ac",
  })
  @get()
  static getAc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ac",
  })
  @post("{id}")
  static createAc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
