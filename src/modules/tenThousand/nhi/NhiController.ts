import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhi")
export default class NhiController {
  @operation({
    summary: "Get Nhi",
  })
  @get()
  static getNhi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhi",
  })
  @post("{id}")
  static createNhi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
