import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cov")
export default class CovController {
  @operation({
    summary: "Get Cov",
  })
  @get()
  static getCov = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cov",
  })
  @post("{id}")
  static createCov = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
