import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cko")
export default class CkoController {
  @operation({
    summary: "Get Cko",
  })
  @get()
  static getCko = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cko",
  })
  @post("{id}")
  static createCko = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
