import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsw")
export default class BswController {
  @operation({
    summary: "Get Bsw",
  })
  @get()
  static getBsw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bsw",
  })
  @post("{id}")
  static createBsw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
