import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ccw")
export default class CcwController {
  @operation({
    summary: "Get Ccw",
  })
  @get()
  static getCcw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ccw",
  })
  @post("{id}")
  static createCcw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
