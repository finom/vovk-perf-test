import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvr")
export default class CvrController {
  @operation({
    summary: "Get Cvr",
  })
  @get()
  static getCvr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cvr",
  })
  @post("{id}")
  static createCvr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
