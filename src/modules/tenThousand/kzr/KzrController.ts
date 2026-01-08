import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzr")
export default class KzrController {
  @operation({
    summary: "Get Kzr",
  })
  @get()
  static getKzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzr",
  })
  @post("{id}")
  static createKzr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
