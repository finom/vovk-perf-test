import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("icv")
export default class IcvController {
  @operation({
    summary: "Get Icv",
  })
  @get()
  static getIcv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icv",
  })
  @post("{id}")
  static createIcv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
