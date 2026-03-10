import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvg")
export default class CvgController {
  @operation({
    summary: "Get Cvg",
  })
  @get()
  static getCvg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cvg",
  })
  @post("{id}")
  static createCvg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
