import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cau")
export default class CauController {
  @operation({
    summary: "Get Cau",
  })
  @get()
  static getCau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cau",
  })
  @post("{id}")
  static createCau = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
