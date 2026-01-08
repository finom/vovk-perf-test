import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvq")
export default class CvqController {
  @operation({
    summary: "Get Cvq",
  })
  @get()
  static getCvq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvq",
  })
  @post("{id}")
  static createCvq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
