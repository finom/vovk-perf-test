import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgw")
export default class CgwController {
  @operation({
    summary: "Get Cgw",
  })
  @get()
  static getCgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgw",
  })
  @post("{id}")
  static createCgw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
