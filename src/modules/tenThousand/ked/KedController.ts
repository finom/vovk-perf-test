import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ked")
export default class KedController {
  @operation({
    summary: "Get Ked",
  })
  @get()
  static getKed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ked",
  })
  @post("{id}")
  static createKed = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
