import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgx")
export default class CgxController {
  @operation({
    summary: "Get Cgx",
  })
  @get()
  static getCgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgx",
  })
  @post("{id}")
  static createCgx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
