import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpw")
export default class JpwController {
  @operation({
    summary: "Get Jpw",
  })
  @get()
  static getJpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpw",
  })
  @post("{id}")
  static createJpw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
