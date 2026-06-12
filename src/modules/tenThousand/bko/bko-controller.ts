import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bko")
export default class BkoController {
  @operation({
    summary: "Get Bko",
  })
  @get()
  static getBko = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bko",
  })
  @post("{id}")
  static createBko = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
