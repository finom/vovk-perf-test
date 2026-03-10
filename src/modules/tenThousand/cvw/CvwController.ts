import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvw")
export default class CvwController {
  @operation({
    summary: "Get Cvw",
  })
  @get()
  static getCvw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cvw",
  })
  @post("{id}")
  static createCvw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
