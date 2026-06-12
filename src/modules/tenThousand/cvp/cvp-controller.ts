import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvp")
export default class CvpController {
  @operation({
    summary: "Get Cvp",
  })
  @get()
  static getCvp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cvp",
  })
  @post("{id}")
  static createCvp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
