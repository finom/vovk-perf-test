import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvn")
export default class CvnController {
  @operation({
    summary: "Get Cvn",
  })
  @get()
  static getCvn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cvn",
  })
  @post("{id}")
  static createCvn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
