import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kaq")
export default class KaqController {
  @operation({
    summary: "Get Kaq",
  })
  @get()
  static getKaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kaq",
  })
  @post("{id}")
  static createKaq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
