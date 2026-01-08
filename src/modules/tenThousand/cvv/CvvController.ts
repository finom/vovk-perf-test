import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvv")
export default class CvvController {
  @operation({
    summary: "Get Cvv",
  })
  @get()
  static getCvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvv",
  })
  @post("{id}")
  static createCvv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
