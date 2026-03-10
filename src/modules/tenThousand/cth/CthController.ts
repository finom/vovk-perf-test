import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cth")
export default class CthController {
  @operation({
    summary: "Get Cth",
  })
  @get()
  static getCth = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cth",
  })
  @post("{id}")
  static createCth = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
