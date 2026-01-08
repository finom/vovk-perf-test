import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihi")
export default class IhiController {
  @operation({
    summary: "Get Ihi",
  })
  @get()
  static getIhi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihi",
  })
  @post("{id}")
  static createIhi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
