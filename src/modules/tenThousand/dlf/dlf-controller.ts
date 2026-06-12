import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dlf")
export default class DlfController {
  @operation({
    summary: "Get Dlf",
  })
  @get()
  static getDlf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dlf",
  })
  @post("{id}")
  static createDlf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
