import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvs")
export default class CvsController {
  @operation({
    summary: "Get Cvs",
  })
  @get()
  static getCvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvs",
  })
  @post("{id}")
  static createCvs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
