import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cnc")
export default class CncController {
  @operation({
    summary: "Get Cnc",
  })
  @get()
  static getCnc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cnc",
  })
  @post("{id}")
  static createCnc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
