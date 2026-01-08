import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvf")
export default class CvfController {
  @operation({
    summary: "Get Cvf",
  })
  @get()
  static getCvf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvf",
  })
  @post("{id}")
  static createCvf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
