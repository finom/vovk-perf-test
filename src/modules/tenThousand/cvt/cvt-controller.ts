import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvt")
export default class CvtController {
  @operation({
    summary: "Get Cvt",
  })
  @get()
  static getCvt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cvt",
  })
  @post("{id}")
  static createCvt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
