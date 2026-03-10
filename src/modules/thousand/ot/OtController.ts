import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ot")
export default class OtController {
  @operation({
    summary: "Get Ot",
  })
  @get()
  static getOt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ot",
  })
  @post("{id}")
  static createOt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
