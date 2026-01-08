import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzz")
export default class KzzController {
  @operation({
    summary: "Get Kzz",
  })
  @get()
  static getKzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzz",
  })
  @post("{id}")
  static createKzz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
