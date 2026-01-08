import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzf")
export default class KzfController {
  @operation({
    summary: "Get Kzf",
  })
  @get()
  static getKzf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzf",
  })
  @post("{id}")
  static createKzf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
