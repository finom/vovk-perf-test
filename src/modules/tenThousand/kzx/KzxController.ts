import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzx")
export default class KzxController {
  @operation({
    summary: "Get Kzx",
  })
  @get()
  static getKzx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzx",
  })
  @post("{id}")
  static createKzx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
