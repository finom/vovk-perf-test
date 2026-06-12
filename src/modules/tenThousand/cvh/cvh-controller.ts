import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvh")
export default class CvhController {
  @operation({
    summary: "Get Cvh",
  })
  @get()
  static getCvh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cvh",
  })
  @post("{id}")
  static createCvh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
