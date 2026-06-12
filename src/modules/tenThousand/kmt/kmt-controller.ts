import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmt")
export default class KmtController {
  @operation({
    summary: "Get Kmt",
  })
  @get()
  static getKmt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kmt",
  })
  @post("{id}")
  static createKmt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
