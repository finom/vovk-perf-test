import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxv")
export default class CxvController {
  @operation({
    summary: "Get Cxv",
  })
  @get()
  static getCxv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cxv",
  })
  @post("{id}")
  static createCxv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
