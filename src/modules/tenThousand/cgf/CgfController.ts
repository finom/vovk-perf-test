import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgf")
export default class CgfController {
  @operation({
    summary: "Get Cgf",
  })
  @get()
  static getCgf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgf",
  })
  @post("{id}")
  static createCgf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
