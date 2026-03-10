import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvx")
export default class CvxController {
  @operation({
    summary: "Get Cvx",
  })
  @get()
  static getCvx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cvx",
  })
  @post("{id}")
  static createCvx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
