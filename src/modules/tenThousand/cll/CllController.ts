import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cll")
export default class CllController {
  @operation({
    summary: "Get Cll",
  })
  @get()
  static getCll = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cll",
  })
  @post("{id}")
  static createCll = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
