import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvb")
export default class CvbController {
  @operation({
    summary: "Get Cvb",
  })
  @get()
  static getCvb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cvb",
  })
  @post("{id}")
  static createCvb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
