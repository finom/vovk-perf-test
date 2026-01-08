import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyf")
export default class CyfController {
  @operation({
    summary: "Get Cyf",
  })
  @get()
  static getCyf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyf",
  })
  @post("{id}")
  static createCyf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
