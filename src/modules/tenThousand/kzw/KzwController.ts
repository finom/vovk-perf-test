import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzw")
export default class KzwController {
  @operation({
    summary: "Get Kzw",
  })
  @get()
  static getKzw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzw",
  })
  @post("{id}")
  static createKzw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
