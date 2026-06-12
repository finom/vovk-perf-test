import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("duv")
export default class DuvController {
  @operation({
    summary: "Get Duv",
  })
  @get()
  static getDuv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Duv",
  })
  @post("{id}")
  static createDuv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
