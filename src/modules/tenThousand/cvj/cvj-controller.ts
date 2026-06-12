import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvj")
export default class CvjController {
  @operation({
    summary: "Get Cvj",
  })
  @get()
  static getCvj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cvj",
  })
  @post("{id}")
  static createCvj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
