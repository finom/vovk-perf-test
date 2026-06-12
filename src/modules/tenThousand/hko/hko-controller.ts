import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hko")
export default class HkoController {
  @operation({
    summary: "Get Hko",
  })
  @get()
  static getHko = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hko",
  })
  @post("{id}")
  static createHko = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
