import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khu")
export default class KhuController {
  @operation({
    summary: "Get Khu",
  })
  @get()
  static getKhu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khu",
  })
  @post("{id}")
  static createKhu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
