import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvd")
export default class CvdController {
  @operation({
    summary: "Get Cvd",
  })
  @get()
  static getCvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvd",
  })
  @post("{id}")
  static createCvd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
