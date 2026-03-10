import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsm")
export default class DsmController {
  @operation({
    summary: "Get Dsm",
  })
  @get()
  static getDsm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dsm",
  })
  @post("{id}")
  static createDsm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
