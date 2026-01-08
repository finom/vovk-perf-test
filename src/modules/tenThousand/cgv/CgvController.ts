import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgv")
export default class CgvController {
  @operation({
    summary: "Get Cgv",
  })
  @get()
  static getCgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgv",
  })
  @post("{id}")
  static createCgv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
