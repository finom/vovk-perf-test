import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cnb")
export default class CnbController {
  @operation({
    summary: "Get Cnb",
  })
  @get()
  static getCnb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnb",
  })
  @post("{id}")
  static createCnb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
