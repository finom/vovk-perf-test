import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dl")
export default class DlController {
  @operation({
    summary: "Get Dl",
  })
  @get()
  static getDl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dl",
  })
  @post("{id}")
  static createDl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
