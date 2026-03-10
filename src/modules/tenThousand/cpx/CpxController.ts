import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpx")
export default class CpxController {
  @operation({
    summary: "Get Cpx",
  })
  @get()
  static getCpx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cpx",
  })
  @post("{id}")
  static createCpx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
