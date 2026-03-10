import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijm")
export default class IjmController {
  @operation({
    summary: "Get Ijm",
  })
  @get()
  static getIjm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ijm",
  })
  @post("{id}")
  static createIjm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
