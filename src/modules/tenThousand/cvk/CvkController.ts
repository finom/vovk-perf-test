import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvk")
export default class CvkController {
  @operation({
    summary: "Get Cvk",
  })
  @get()
  static getCvk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cvk",
  })
  @post("{id}")
  static createCvk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
