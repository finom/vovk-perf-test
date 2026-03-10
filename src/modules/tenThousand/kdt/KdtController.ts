import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdt")
export default class KdtController {
  @operation({
    summary: "Get Kdt",
  })
  @get()
  static getKdt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kdt",
  })
  @post("{id}")
  static createKdt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
