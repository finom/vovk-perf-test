import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsl")
export default class GslController {
  @operation({
    summary: "Get Gsl",
  })
  @get()
  static getGsl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gsl",
  })
  @post("{id}")
  static createGsl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
