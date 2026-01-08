import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cnk")
export default class CnkController {
  @operation({
    summary: "Get Cnk",
  })
  @get()
  static getCnk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnk",
  })
  @post("{id}")
  static createCnk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
