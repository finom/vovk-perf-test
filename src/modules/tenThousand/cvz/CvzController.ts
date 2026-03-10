import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvz")
export default class CvzController {
  @operation({
    summary: "Get Cvz",
  })
  @get()
  static getCvz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cvz",
  })
  @post("{id}")
  static createCvz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
