import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cje")
export default class CjeController {
  @operation({
    summary: "Get Cje",
  })
  @get()
  static getCje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cje",
  })
  @post("{id}")
  static createCje = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
