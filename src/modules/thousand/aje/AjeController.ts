import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aje")
export default class AjeController {
  @operation({
    summary: "Get Aje",
  })
  @get()
  static getAje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aje",
  })
  @post("{id}")
  static createAje = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
