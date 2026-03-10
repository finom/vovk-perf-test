import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvl")
export default class CvlController {
  @operation({
    summary: "Get Cvl",
  })
  @get()
  static getCvl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cvl",
  })
  @post("{id}")
  static createCvl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
