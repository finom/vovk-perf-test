import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dw")
export default class DwController {
  @operation({
    summary: "Get Dw",
  })
  @get()
  static getDw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dw",
  })
  @post("{id}")
  static createDw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
